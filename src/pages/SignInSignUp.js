import React, { useState } from "react";
import SignInPage from "./Login_Register/SignInPage";
import SignUpPage from "./Login_Register/SignUpPage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;

const Button = styled.button`
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  background-color: transparent;
  border: none;
  box-shadow: 0 0 0 0 gray;
  transition: all 0.5s ease-in-out;
  ${(props) => props.selected && `box-shadow: 0 2px 0 0 #304ffe;`};
`;

const SignInSignUp = () => {
  const [activePage, setActivePage] = useState("SignIn");

  const handlePageChange = (event) => {
    setActivePage(event.target.value);
  };

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <Button
          selected={activePage === "SignIn"}
          value="SignIn"
          onClick={handlePageChange}
        >
          Login
        </Button>
        <Button
          selected={activePage === "SignUp"}
          value="SignUp"
          onClick={handlePageChange}
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        >
          Register
        </Button>
      </div>
      {activePage === "SignIn" ? <SignInPage /> : <SignUpPage />}
    </Container>
  );
};

export default SignInSignUp;
