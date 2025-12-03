import { useState } from "react";

function useFormValidation(initialValues, schemaFun) {
  const [formData, setFormData] = useState(initialValues);
  const [errMessages, setErrMessages] = useState(initialValues);

  function handleReset() {
    setFormData(() => initialValues);
  }

  function handleChange(e) {
    // get field name and it's value
    const { id: name, value } = e.target;

    // controls element
    setFormData((data) => ({ ...data, [name]: value }));
    // remove error message from the field while typing again
    setErrMessages((errs) => ({ ...errs, [name]: "" }));
  }

  function handleSubmit(e, callback) {
    e.preventDefault();

    const schema = schemaFun();
    const { error } = schema.validate(formData, { abortEarly: false });

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

    callback();

    // resets user data fields
    handleReset();
  }

  return { handleSubmit, handleChange, handleReset, formData, errMessages };
}

export { useFormValidation };
