import { useState } from "react"
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import InputForm from "../inputForm/inputForm"
import "./signUpForm.style.scss"
import Button from "../button/Button.component"
import { BUTTON_TYPE_CLASSES } from "../button/Button.component"
// import { UserContext } from "../../contexts/user.context"

const initialForm = {
  displayName:"",
  email:"",
  password:"",
  confirmPassword:""
}
const SighUpForm = () => {

  const [formData,setFormData] = useState(initialForm)
  const {displayName,email,password,confirmPassword} = formData
  // const {setCurrentUser} = useContext(UserContext)

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
    if (password !== confirmPassword){
      alert("your password is not equal!")
      return;
    }
    try{
      const response = await createAuthUserWithEmailAndPassword(email,password)
      await createUserDocumentFromAuth(response.user,{displayName})
      // setCurrentUser(response.user)
      resetValue()
    }catch(error){
      console.log("there is somthing worry",error)
    }
  }

  return(
    <div className="sign-up-container">
      <h2>Don`t have an account?</h2>
      <span>Sign up with email and passward</span>
      <form onSubmit={onSubmitValue}>  
        <InputForm label={"Display Name"} type={"text"} required value={displayName} name="displayName" onChange={onChangeValue}></InputForm>

        <InputForm label={"Email"} type={"email"} required value={email} name="email" onChange={onChangeValue}></InputForm>

        <InputForm label={"Password"} type={"password"} required value={password} name="password" onChange={onChangeValue}></InputForm>

        <InputForm label={"Confirm Password"} type={"password"} required value={confirmPassword} name="confirmPassword" onChange={onChangeValue}></InputForm>

        <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SighUpForm