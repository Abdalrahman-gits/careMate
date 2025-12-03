import { useNavigate } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { loginSchema } from "./loginSchema";
import { useFormValidation } from "../../hooks/useFormValidation";

import Button from "../../ui/Button";
import FormSubTitle from "../../ui/FormSubTitle";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import InputWithIcon from "../../ui/InputWithIcon";
import PasswordInput from "../../ui/PasswordInput";

function LoginForm() {
  const { formData, handleSubmit, handleReset, handleChange, errMessages } =
    useFormValidation(
      {
        email: "",
        password: "",
      },
      loginSchema
    );
  const navigate = useNavigate();

  return (
    <Form onSubmit={(e) => handleSubmit(e, () => console.log("login succes"))}>
      <h2>Login</h2>
      <FormSubTitle>
        <span>Are you a new member?</span>
        <button type="button" onClick={() => navigate("/auth/register")}>
          Sign up here.
        </button>
      </FormSubTitle>

      <FormRow label="email" error={errMessages.email}>
        <InputWithIcon
          icon={MdAlternateEmail}
          type="email"
          id="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow label="password" error={errMessages.password}>
        <PasswordInput value={formData.password} onChange={handleChange} />
      </FormRow>
      <Button type="submit" variation="primary" size="large" width="100%">
        Submit
      </Button>
      <Button
        type="reset"
        variation="beigeBtn"
        size="large"
        width="100%"
        onClick={handleReset}>
        Reset
      </Button>
    </Form>
  );
}

export default LoginForm;
