import Button from "../../ui/Button";
import FormSubTitle from "../../ui/FormSubTitle";
import { MdAlternateEmail } from "react-icons/md";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import InputWithIcon from "../../ui/InputWithIcon";
import PasswordInput from "../../ui/PasswordInput";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  return (
    <Form>
      <h2>Login</h2>
      <FormSubTitle>
        <span>Are you a new member?</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/auth/register");
          }}>
          Sign up here.
        </button>
      </FormSubTitle>

      <FormRow label="email">
        <InputWithIcon
          icon={MdAlternateEmail}
          type="email"
          id="email"
          placeholder="Email address"
        />
      </FormRow>
      <FormRow label="password">
        <PasswordInput />
      </FormRow>
      <Button variation="primary" size="large" width="100%">
        Submit
      </Button>
      <Button variation="beigeBtn" size="large" width="100%">
        Reset
      </Button>
    </Form>
  );
}

export default LoginForm;
