import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaRegIdCard } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { signUpSchema } from "./signupSchema";

import Button from "../../ui/Button";
import FormSubTitle from "../../ui/FormSubTitle";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import InputWithIcon from "../../ui/InputWithIcon";
import PasswordInput from "../../ui/PasswordInput";

function SignupForm() {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errMessages, setErrMessages] = useState({
    name: "",
    phone: "",
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

    const schema = signUpSchema();
    const { error } = schema.validate(userData, { abortEarly: false });

    if (error) {
      const errorObj = {};
      // assign error messages in "errorObj"
      error.details.forEach(
        (field) => (errorObj[field.path[0]] = field.message)
      );

      // set error messages
      setErrMessages(() => errorObj);
      return;
    }

    // resets user data fields
    setUserData(() => ({ name: "", phone: "", email: "", password: "" }));

    console.log("submit success");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <FormSubTitle>
        <span>Already a member?</span>
        <button type="button" onClick={() => navigate("/auth/login")}>
          Login.
        </button>
      </FormSubTitle>
      <FormRow label="name" error={errMessages.name}>
        <InputWithIcon
          icon={FaRegIdCard}
          type="text"
          id="name"
          placeholder="Enter your name"
          value={userData.name}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow label="phone" error={errMessages.phone}>
        <InputWithIcon
          icon={FaPhoneAlt}
          type="tel"
          id="phone"
          placeholder="Phone number"
          value={userData.phone}
          onChange={handleChange}
        />
      </FormRow>
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
        <PasswordInput onChange={handleChange} value={userData.password} />
      </FormRow>
      <Button type="submit" variation="primary" size="large" width="100%">
        Submit
      </Button>
      <Button variation="beigeBtn" size="large" width="100%">
        Reset
      </Button>
    </Form>
  );
}

export default SignupForm;
