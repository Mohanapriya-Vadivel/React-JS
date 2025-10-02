import React from "react";
import useForm from "./useForm";

function ValidationForm() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) errors.password = "Password is required";
    else if (values.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    { name: "", email: "", password: "" },
    validate
  );

  const submitForm = () => {
    alert(`Form submitted successfully!\nName: ${values.name}\nEmail: ${values.email}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Day 30 - Form Validation & Custom Hook</h2>
      <form onSubmit={(e) => handleSubmit(e, submitForm)}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={values.name} onChange={handleChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email: </label>
          <input type="email" name="email" value={values.email} onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password: </label>
          <input type="password" name="password" value={values.password} onChange={handleChange} />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ValidationForm;
