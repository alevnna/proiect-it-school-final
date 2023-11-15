import React, { useEffect, useState } from "react";
import {
  FormButton,
  FormColumn,
  FormInput,
  FormContainer,
  FormInputRow,
  FormLabel,
  FormSection,
  FormTitle,
  FormMessage,
  FormWrapper,
  FormRow,
} from "./Register.style";
import { Container } from "../golbalstyles";
import validateReg from "./validateReg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(null);
let signup = { name, email, password, confirmPass };

     useEffect(() =>  { 
    fetch(`http://localhost:3003/user`, {
      method: "POST",
      headers: { "content-type": "application.json" },
      body: JSON.stringify(validateReg),
    }).then((res) => {
      alert("Thanks for signing up");
  
    }).catch((error) => {
      alert('Failed to sign up:'+error.FormMessage);
    });
  })
  
    const handleSubmit = (e) => {
      e.preventDefault();
    const resultError = validateReg({ name, email, password, confirmPass });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
    setError(null);
    setSuccess("Thankyou for registering!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const regData = [
    {
      label: "Name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },

    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },

    {
      label: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },

    {
      label: "Confirm Password",
      value: confirmPass,
      onChange: (e) => setConfirmPass(e.target.value),
      type: "password",
    },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle> Sign Up </FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {regData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput {...el} />
                </FormInputRow>
              ))}

              <FormButton onClick={handleSubmit}>Sign up </FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variant={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variant={messageVariants}
                initial="hidden"
                animate="animate"
                success
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Register;
