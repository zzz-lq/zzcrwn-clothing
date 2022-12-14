import {Group,FormInput,FormInputLabel} from "./inputForm.styles"
import { FC, InputHTMLAttributes } from "react"
export type InputFormProps = {
  label:string
} & InputHTMLAttributes<HTMLInputElement>

const InputForm: FC<InputFormProps> = ({label,...otherProps}) => {

  return(
    <Group>
      <FormInput {...otherProps} />
      {
        label && (
          <FormInputLabel shrink={Boolean(
            typeof otherProps.value === "string" &&
            otherProps.value?.length
          )}>{label}</FormInputLabel>
        )
      }
      
    </Group>
  )
}

export default InputForm