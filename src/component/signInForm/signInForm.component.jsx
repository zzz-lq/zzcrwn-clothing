import { useState } from "react"
import { createUserDocumentFromAuth,signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import InputForm from "../inputForm/inputForm"
import "./signInForm.style.scss"
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component"


const initialForm = {
  email:"",
  password:"",
}
const SighInForm = () => {

  // const {setCurrentUser} = useContext(UserContext)

  const [formData,setFormData] = useState(initialForm)
  const {email,password} = formData

  const onChangeValue = (e) => {

    const {name,value} = e.target
    setFormData({...formData,[name]:value})
    // console.log(formData)
  }

  const resetValue = () => {
    setFormData(initialForm)
  }

  const onSubmitValue = async (e) => {
    e.preventDefault()
    
    try{
      const response = await signInAuthUserWithEmailAndPassword(email,password)
      // setCurrentUser(response.user)
      // console.log(response.user)
      resetValue()
    }catch(error){
      console.log("there is somthing worry",error)
    }
  }

  const logGoogleUser = async () => {

    const {user} = await signInWithGooglePopup();
    // console.log(response) //可以获取到accessToken
    // createUserDocumentFromAuth(user)
    // setCurrentUser(user)
  }

  return(
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and passward or Google Account.</span>
      <form onSubmit={onSubmitValue}>  

        <InputForm label={"Email"} type={"email"} required value={email} name="email" onChange={onChangeValue}></InputForm>

        <InputForm label={"Password"} type={"password"} required value={password} name="password" onChange={onChangeValue}></InputForm>

        <div className="buttons-container">
          <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SighInForm