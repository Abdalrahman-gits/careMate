import { FaLock } from "react-icons/fa";
import { FormInput, IconWrapper, InputContainer } from "./sharedInputStyles";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";

function PasswordInput({ ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputContainer>
      <FormInput
        type={showPassword ? "text" : "password"}
        id="password"
        placeholder="Password"
      />
      <IconWrapper>
        <FaLock />
      </IconWrapper>
      <IconWrapper
        startdirection="right"
        style={{ cursor: "pointer" }}
        onClick={() => setShowPassword((show) => !show)}>
        {showPassword ? <IoEye /> : <IoEyeOff />}
      </IconWrapper>
    </InputContainer>
  );
}

export default PasswordInput;
