import Button from "../../ui/Button";
import FormSubTitle from "../../ui/FormSubTitle";
import { FaPhoneAlt, FaRegIdCard, FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import InputWithIcon from "../../ui/InputWithIcon";
import PasswordInput from "../../ui/PasswordInput";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();

  return (
    <Form>
      <h2>Sign Up</h2>
      <FormSubTitle>
        <span>Already a member?</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/auth/login");
          }}>
          Login.
        </button>
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

export default SignupForm;
