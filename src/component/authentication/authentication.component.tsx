import SighInForm from "../signInForm/signInForm.component";
import SignUpForm from "../signUpForm/signUpForm.component";
import {AuthenticationContainer} from "./authentication.style"

const Authentication = () => {

  return(
    <AuthenticationContainer>
      {/* <h1>Sign In Page</h1> */}
      <SighInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication