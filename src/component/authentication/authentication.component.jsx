import SighInForm from "../signInForm/signInForm.component";
import SighUpForm from "../signUpForm/signUpForm.component";
import "./authentication.style.scss"

const Authentication = () => {

  return(
    <div className="authentication-container">
      {/* <h1>Sign In Page</h1> */}
      <SighInForm />
      <SighUpForm />
    </div>
  )
}

export default Authentication