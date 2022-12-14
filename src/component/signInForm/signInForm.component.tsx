import { useState,ChangeEvent,FormEvent  } from "react"
import InputForm from "../inputForm/inputForm"
import {SignUpContainer,ButtonsContainer} from "./signInForm.style"
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component"
import { useDispatch } from "react-redux"
import { googleSignInStart,emailSignInStart } from "../../store/user/user.action"

export type InputFormType = {
  email:string,
  password:string,
}

const initialForm:InputFormType = {
  email:"",
  password:"",
}

const SighInForm = () => {

  // const {setCurrentUser} = useContext(UserContext)
  const dispatch = useDispatch()
  const [formData,setFormData] = useState<InputFormType>(initialForm)
  const {email,password} = formData

  const onChangeValue = (e :ChangeEvent<HTMLInputElement>) => {

    const {name,value} = e.target
    setFormData({...formData,[name]:value})
    // console.log(formData)
  }

  const resetValue = () => {
    setFormData(initialForm)
  }

  const onSubmitValue = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try{
      // const response = await signInAuthUserWithEmailAndPassword(email,password)
      dispatch(emailSignInStart(email,password))
      // setCurrentUser(response.user)
      // console.log(response.user)
      resetValue()
    }catch(error){
      console.log("there is somthing worry",error)
    }
  }

  const logGoogleUser = async () => {
    dispatch(googleSignInStart())
    // const {user} = await signInWithGooglePopup();
    // console.log(response) //可以获取到accessToken
    // createUserDocumentFromAuth(user)
    // setCurrentUser(user)
  }

  return(
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with email and passward or Google Account.</span>
      <form onSubmit={onSubmitValue}>  

        <InputForm label="Email" type={"email"} required value={email} name="email" onChange={onChangeValue}></InputForm>

        <InputForm label="Password" type={"password"} required value={password} name="password" onChange={onChangeValue}></InputForm>

        <ButtonsContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Google Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  )
}

export default SighInForm