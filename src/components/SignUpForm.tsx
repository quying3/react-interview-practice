// Exercise 5 — Form Validation
//
// Build a simple signup form in React with TypeScript.
//
// Requirements:
// 1. Display three input fields:
//    - Name
//    - Email
//    - Password
//
// 2. Display a "Submit" button.
//
// 3. All three fields should be controlled inputs.
//
// 4. When the form is submitted, validate the inputs:
//
//    Name:
//    - Cannot be empty or whitespace-only.
//
//    Email:
//    - Cannot be empty.
//    - Must contain "@".
//
//    Password:
//    - Must be at least 6 characters.
//
// 5. If a field is invalid, display an error message below that field.
//
//    Examples:
//    "Name is required."
//    "Please enter a valid email."
//    "Password must be at least 6 characters."
//
// 6. If the user submits again after fixing a field,
//    its previous error should disappear.
//
// 7. If all fields are valid, display:
//    "Signup successful!"
//
// 8. Do not reload the page when the form is submitted.
//
// 9. Use a <form> element and its onSubmit event.
//
// 10. Use React functional components and hooks.
//
// 11. Use TypeScript types for event handlers.
//
// 12. Do not use external libraries.
import React, { useState } from "react";

const SignUpForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validName, setValidName] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [validPassword, setValidPassword] = useState<boolean>(true);
  const [validForm, setValidForm] = useState<boolean>(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isNameValid = name.trim().length > 0;
    const isEmailValid = email.trim().length > 0 && email.includes("@");
    const isPasswordValid = password.length >= 6;
    const isFormValid = isNameValid && isEmailValid && isPasswordValid;
    setValidName(isNameValid);
    setValidEmail(isEmailValid);
    setValidPassword(isPasswordValid);
    setValidForm(isFormValid);
    if (isFormValid) {
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setValidName(true);
    setValidForm(false);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setValidEmail(true);
    setValidForm(false);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setValidPassword(true);
    setValidForm(false);
  };
  return (
    <>
      <div>SignUpForm</div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          gap: "8px",
          width: "300px",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={handleName} />
        {!validName && <p role="alert">Name is required.</p>}
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={handleEmail} />
        {!validEmail && <p role="alert">Please enter a valid email.</p>}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        {!validPassword && (
          <p role="alert">Password must be at least 6 characters.</p>
        )}
        <button type="submit">Submit</button>
      </form>

      {validForm && <p role="status">Signup successful!</p>}
    </>
  );
};

export default SignUpForm;
