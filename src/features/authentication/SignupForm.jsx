import Button from "../../ui/Button";
import FormSubTitle from "../../ui/FormSubTitle";
import { FaLock, FaPhoneAlt, FaRegIdCard, FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import InputWithIcon from "../../ui/InputWithIcon";
import PasswordInput from "../../ui/PasswordInput";

function SignupForm() {
  return (
    <Form>
      <h2>Sign Up</h2>
      <FormSubTitle>
        <span>Already a member?</span>
        <button>Login</button>
      </FormSubTitle>
      <FormRow label="role">
        <InputWithIcon
          icon={FaUser}
          type="text"
          id="role"
          placeholder="Select Role"
        />
      </FormRow>
      <FormRow label="name">
        <InputWithIcon
          icon={FaRegIdCard}
          type="text"
          id="name"
          placeholder="Enter your name"
        />
      </FormRow>
      <FormRow label="phone">
        <InputWithIcon
          icon={FaPhoneAlt}
          type="number"
          id="phone"
          placeholder="Phone number"
        />
      </FormRow>
      <FormRow label="email">
        <InputWithIcon
          icon={MdAlternateEmail}
          type="email"
          id="email"
          placeholder="Enter your email address"
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

export default SignupForm;
