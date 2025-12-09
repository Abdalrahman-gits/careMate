import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaRegIdCard } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { signUpSchema } from "./signupSchema";
import { useFormValidation } from "../../hooks/useFormValidation";
import { useSignup } from "./useSignup";

import Button from "../../ui/Button";
import FormSubTitle from "../../ui/FormSubTitle";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import InputWithIcon from "../../ui/InputWithIcon";
import PasswordInput from "../../ui/PasswordInput";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUser } from "./useUser";

function SignupForm() {
  const { formData, handleSubmit, handleChange, handleReset, errMessages } =
    useFormValidation(
      {
        name: "",
        phone: "",
        email: "",
        password: "",
      },
      signUpSchema
    );
  const navigate = useNavigate();
  const { signup, isPending } = useSignup();
  useUser();

  function onSubmit() {
    signup(formData);
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e, onSubmit)}>
      <h2>Sign Up</h2>
      <FormSubTitle>
        <span>Already a member?</span>
        <button
          type="button"
          onClick={() => navigate("/auth/login")}
          disabled={isPending}>
          Login.
        </button>
      </FormSubTitle>
      <FormRow label="name" error={errMessages?.name}>
        <InputWithIcon
          icon={FaRegIdCard}
          type="text"
          id="name"
          placeholder="Enter your name"
          value={formData?.name}
          onChange={handleChange}
          disabled={isPending}
        />
      </FormRow>
      <FormRow label="phone" error={errMessages?.phone}>
        <InputWithIcon
          icon={FaPhoneAlt}
          type="tel"
          id="phone"
          placeholder="Phone number"
          value={formData?.phone}
          onChange={handleChange}
          disabled={isPending}
        />
      </FormRow>
      <FormRow label="email" error={errMessages?.email}>
        <InputWithIcon
          icon={MdAlternateEmail}
          type="email"
          id="email"
          placeholder="Email address"
          value={formData?.email}
          onChange={handleChange}
          disabled={isPending}
        />
      </FormRow>
      <FormRow label="password" error={errMessages?.password}>
        <PasswordInput
          onChange={handleChange}
          value={formData?.password}
          disabled={isPending}
        />
      </FormRow>
      <Button
        type="submit"
        variation="primary"
        size="large"
        width="100%"
        disabled={isPending}>
        {isPending ? <SpinnerMini /> : "Submit"}
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

export default SignupForm;
