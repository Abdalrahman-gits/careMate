import { useNavigate } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { loginSchema } from "./loginSchema";
import { useFormValidation } from "../../hooks/useFormValidation";
import { useLogin } from "./useLogin";

import Button from "../../ui/Button";
import FormSubTitle from "../../ui/FormSubTitle";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import InputWithIcon from "../../ui/InputWithIcon";
import PasswordInput from "../../ui/PasswordInput";

const initUserData = {
  email: "",
  password: "",
};

function LoginForm() {
  const { formData, handleSubmit, handleReset, handleChange, errMessages } =
    useFormValidation(initUserData, loginSchema);

  const { login, isPending } = useLogin();
  const navigate = useNavigate();

  function handleLogin() {
    login(formData, {
      onSuccess: () => handleReset(),
    });
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e, handleLogin)}>
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
          disabled={isPending}
        />
      </FormRow>
      <FormRow label="password" error={errMessages.password}>
        <PasswordInput
          value={formData.password}
          onChange={handleChange}
          disabled={isPending}
        />
      </FormRow>
      <Button
        type="submit"
        variation="primary"
        size="large"
        width="100%"
        disabled={isPending}>
        {isPending ? <SpinnerMinni /> : "Login"}
      </Button>
      <Button
        type="reset"
        variation="beigeBtn"
        size="large"
        width="100%"
        onClick={handleReset}
        disabled={isPending}>
        Reset
      </Button>
    </Form>
  );
}

export default LoginForm;
