import {Group,FormInput,FormInputLabel} from "./inputForm.styles.jsx"

const InputForm = ({label,...otherProps}) => {

  return(
    <Group>
      <FormInput {...otherProps} />
      {
        label && (
          <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
        )
      }
      
    </Group>
  )
}

export default InputForm