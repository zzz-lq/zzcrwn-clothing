import { PaymentFormContainer,FormContainer,PaymentButton } from "./payment-form.styles"
import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js"
import {BUTTON_TYPE_CLASSES} from "../button/Button.component"
import { useState } from "react"
import { useSelector } from "react-redux"
import {selectCartTotalPrice} from "../../store/cart/cart.selector"
import {selectorCurrentUser} from "../../store/user/user.selector"

const PaymentForm = () => {

  const stripe = useStripe()
  const elements = useElements()

  const amount = useSelector(selectCartTotalPrice)
  const currentUser = useSelector(selectorCurrentUser)
  const [isLoading,setIsLoading] = useState(false)

  const paymentHandler = async (e) => {
    
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
  
    setIsLoading(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const {
      paymentIntent: {client_secret},
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret,{
      payment_method: {
        card:elements.getElement(CardElement),
        billing_details:{
          name: currentUser ? currentUser.displayName : "Guest",
        }
      }
    })

    setIsLoading(false)
    if (paymentResult.error) {
      alert(paymentResult.error)
    }else {
      if (paymentResult.paymentIntent.status === "succeeded"){
        alert("Payment Successful!")
      }
    }

  }

  return(
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton isLoading={isLoading} buttonType={BUTTON_TYPE_CLASSES.inverted} >Pay now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm