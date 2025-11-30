import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import Button from "../../ui/Button";
import FormSubTitle from "../../ui/FormSubTitle";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import InputWithIcon from "../../ui/InputWithIcon";
import PasswordInput from "../../ui/PasswordInput";
import { loginSchema } from "./loginSchema";

function LoginForm() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errMessages, setErrMessages] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    // get field name and it's value
    const { id: name, value } = e.target;

    // controls element
    setUserData((data) => ({ ...data, [name]: value }));
    // remove error message from the field while typing again
    setErrMessages((errs) => ({ ...errs, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const schema = loginSchema();
    const { error } = schema.validate(userData, { abortEarly: false });

    if (error) {
      const errorObj = {};
      // assign error messages in "errorObj"
      error.details.forEach(
        (field) => (errorObj[field.path[0]] = field.message)
      );

      // set errors
      setErrMessages(() => errorObj);
      return;
    }

    // resets user data fields
    setUserData(() => ({ email: "", password: "" }));

    console.log("login success");
  }

  return (
    <Form onSubmit={handleSubmit}>
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
          value={userData.email}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow label="password" error={errMessages.password}>
        <PasswordInput value={userData.password} onChange={handleChange} />
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
