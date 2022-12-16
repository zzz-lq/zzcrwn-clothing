import styled from "styled-components";
import Button from "../button/Button.component";

export const PaymentFormContainer = styled.div`
  height:300px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    height: 200px
  }
`

export const FormContainer = styled.form`
  height:100px;
  width: 600px;
  @media screen and (max-width: 800px) {
    height: 200px;
    width: 300px;
  }
`

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    margin : 10px auto
  }
`