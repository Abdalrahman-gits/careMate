import styled from "styled-components";
import defaultUser from "../assets/default-user.jpg";
import ImageCircle from "../ui/ImageCircle";
import FormRow from "./FormRow";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";
import { useUpdateUser } from "../features/authentication/useUpdateUser";
import { profileSchema } from "../features/authentication/profileSchema";
import toast from "react-hot-toast";

const Form = styled.form`
  --padding-val: 3rem;

  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
`;

const FormHeader = styled.div`
  padding: var(--padding-val);
  border-bottom: 1px solid #ddd;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  & h2 {
    text-transform: capitalize;
    font-size: 2.2rem;
    font-weight: 600;
  }

  & p {
    color: var(--color-green);
    font-size: 1.4rem;
  }

  & label {
    cursor: pointer;
  }

  @media (min-width: 991px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

const FormBody = styled.div`
  padding: var(--padding-val);

  display: flex;
  flex-direction: column;
  gap: 3rem;

  & .react-datepicker-wrapper {
    width: 100%;

    input {
      padding-inline: 2rem;
      border-radius: var(--border-radius-md);
      border: 1px solid var(--border-color);
      block-size: 4.5rem;
      width: 100%;
      outline: none;

      &:focus,
      &:focus-within {
        outline: 2px solid var(--primary-green);
      }
    }

    svg {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .react-datepicker__month-container,
  .react-datepicker__current-month {
    font-size: 1.4rem;
  }
`;

const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 600;
  padding-bottom: 0.8rem;
  margin-bottom: var(--padding-val);
  border-bottom: 1px solid #ddd;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;

  @media (min-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  & select {
    cursor: pointer;

    option:disabled {
      background-color: transparent !important;
      color: var(--color-muted);
    }
  }
`;

const BaseInput = styled.input`
  padding-inline: 2rem;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-color);
  block-size: 4.5rem;
  width: 100%;
  outline: none;

  &:focus,
  &:focus-within {
    outline: 2px solid var(--primary-green);
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #333;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const InputWithIcon = styled(BaseInput).attrs({ as: "div" })`
  display: flex;
  align-items: center;
  gap: 1rem;

  & input,
  textarea {
    flex: 1;
    height: 100%;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
      -webkit-text-fill-color: #333;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  &:has(input:disabled) {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  & svg {
    color: var(--primary-green);
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-bottom: 1rem;
`;

function ProfileForm() {
  const { user } = useAuth();
  const metaData = user?.user?.user_metadata || {};

  const intialData = {
    name: metaData.name || "",
    email: metaData.email || "",
    phone: metaData.phone || "",
    gender: metaData.gender || "",
    address: metaData.address || "",
    avatar: "",
  };

  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [currentData, setCurrentData] = useState(intialData);

  // A) Seperated because the set function is passed to DatePicker
  const [dateOfBirth, setDateOfBirth] = useState(metaData.dateOfBirth || "");
  const { updateUser, isPending } = useUpdateUser();

  // 1) Controlling Text data
  function handleOnChange(e) {
    const { id, value } = e.target;
    setCurrentData((cur) => ({ ...cur, [id]: value }));
    setErrors((curr) => ({ ...curr, [id]: "" }));
  }

  // 2) Controlling File change
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) setCurrentData((val) => ({ ...val, avatar: file }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { error } = profileSchema().validate({
      name: currentData.name,
      email: currentData.email,
      phone: currentData.phone,
    });

    if (error) {
      toast.error("Please fill in all fields correctly.");
      const errorObj = {};
      // assign error messages in "errorObj"
      error.details.forEach(
        (field) => (errorObj[field.path[0]] = field.message)
      );

      // set error messages
      setErrors(() => errorObj);
      return;
    }
    updateUser({ ...currentData, dateOfBirth });
  }

  function handleReset() {
    setCurrentData(intialData);
    setDateOfBirth(metaData.dateOfBirth || "");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>
        <label htmlFor="avatar">
          <ImageCircle
            src={
              currentData.avatar
                ? URL.createObjectURL(currentData.avatar)
                : metaData.avatar || defaultUser
            }
            alt="image"
            size="15"
          />
        </label>
        <input
          type="file"
          name=""
          id="avatar"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />
        <div>
          <h2>{metaData.name}</h2>
          <p>Patient ID: 1000200</p>
        </div>
      </FormHeader>

      <FormBody>
        <div>
          <SectionTitle>personal information</SectionTitle>

          <Grid>
            <FormRow label="Full Name" labelColor="black" error={errors?.name}>
              <BaseInput
                type="text"
                id="name"
                placeholder="Full Name"
                value={currentData.name}
                onChange={handleOnChange}
              />
            </FormRow>
            <FormRow label="gender" labelColor="black">
              <BaseInput
                as="select"
                id="gender"
                value={currentData.gender}
                onChange={handleOnChange}>
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </BaseInput>
            </FormRow>
            <FormRow label="Date Of Birth" labelColor="black">
              <DatePicker
                showIcon
                placeholderText="mm/dd/yy"
                id="dateOfBirth"
                selected={dateOfBirth}
                onChange={setDateOfBirth}
              />
            </FormRow>
          </Grid>
        </div>

        <div>
          <SectionTitle>Contact details</SectionTitle>

          <Grid>
            <FormRow
              label="Email Address"
              labelColor="black"
              error={errors?.email}>
              <InputWithIcon>
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  value={currentData.email}
                  onChange={handleOnChange}
                  disabled={true}
                />
              </InputWithIcon>
            </FormRow>

            <FormRow label="Phone" labelColor="black" error={errors?.phone}>
              <InputWithIcon>
                <FaPhone />
                <input
                  type="tel"
                  placeholder="Enter Phone"
                  id="phone"
                  value={currentData.phone}
                  onChange={handleOnChange}
                />
              </InputWithIcon>
            </FormRow>

            <FormRow label="Home Address" labelColor="black">
              <InputWithIcon>
                <FaLocationDot />
                <input
                  type="text"
                  placeholder="Enter Home Address"
                  id="address"
                  value={currentData.address}
                  onChange={handleOnChange}
                />
              </InputWithIcon>
            </FormRow>
          </Grid>
        </div>

        <Footer>
          <Button
            variation="bordered"
            type="button"
            onClick={handleReset}
            disabled={isPending}>
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            Save Changes
          </Button>
        </Footer>
      </FormBody>
    </Form>
  );
}

export default ProfileForm;
