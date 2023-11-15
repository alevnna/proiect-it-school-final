import React, { useState, useEffect } from "react";
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
} from "./LogIn.style";
import { Container } from "../golbalstyles";
import validateForm from "./validateForm";


const Form = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  useEffect(() => {
    fetch(`http://localhost:3003/user`)
    .then((response) => response.json())
    .then((user) => {
      setUser(user)
    });
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();


    const resultError = validateForm({ user, email, password, confirmPass, });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    setUser('');
    setEmail('');
    setPassword('');
    setConfirmPass('');
    setError(null);
    setSuccess('Thankyou for registering!');
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Username",
      value: user,
      onChange: (e) => setUser(e.target.value),
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
            <FormTitle> Log in </FormTitle>
            <FormWrapper  onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput {...el} />
                </FormInputRow>
              ))}

              <FormButton onClick={handleSubmit}>Log in </FormButton>
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

export default Form;
