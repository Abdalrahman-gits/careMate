import { FormInput, IconWrapper, InputContainer } from "./sharedInputStyles";

function InputWithIcon({ icon: Icon, ...props }) {
  return (
    <InputContainer>
      <FormInput {...props} />
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </InputContainer>
  );
}

export default InputWithIcon;
