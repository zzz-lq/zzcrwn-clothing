import { BaseButton, GoogleButton, InvertedButton,ButtonSpinner } from './button.styles'
import { FC,ButtonHTMLAttributes } from 'react'

export enum BUTTON_TYPE_CLASSES{
  base = "base",
  google =  "google-sign-in",
  inverted= "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => ({
  [BUTTON_TYPE_CLASSES.base]:BaseButton,
  [BUTTON_TYPE_CLASSES.google]:GoogleButton,
  [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
}[buttonType])

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES,
  isLoading?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>

// 使用:FC<ButtonProps>类似于之前 {xxx}:ButtonProps
const Button: FC<ButtonProps> = ({children,buttonType,isLoading,...otherProps}) => {

  const CustomButton = getButton(buttonType)
  return(
    <CustomButton disabled={isLoading} {...otherProps }>
      {isLoading ? (
      <ButtonSpinner />
   ) : children}</CustomButton>
  )
}

export default Button