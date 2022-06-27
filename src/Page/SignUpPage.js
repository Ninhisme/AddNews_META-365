import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../components/input";
import { Label } from "../components/Label";
import { useForm } from "react-hook-form";
// import { values } from "lodash";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { Field } from "../components/field";
import Button from "../components/button/Button";
const SignUpPageStyles = styled.div`
  background-color: ${(props) => props.theme.primary};
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
    width: 15%;
    height: 15%;
  }

  .heading {
    text-align: center;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(to right, #8c2820, #1f6532);
    font-weight: xxx-size;
    font-size: 40px;
    margin: 30px 0 30px 0;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({});
  // An se load 5s sumit
  const handleSignUp = (values) => {
    console.log(values);
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo-bg.png 2x" alt="Meta365" className="logo" />
        {/* <h1 className="heading"></h1> */}
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
          <Field>
            <Label htmlFor="fullname" className="label">
              Fullname
            </Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Enter you fullname"
              control={control}
            >
              {/* <IconEyeClose className="input-icon"></IconEyeClose> */}
            </Input>
          </Field>

          <Field>
            <Label htmlFor="email" className="label">
              Email
            </Label>
            <Input
              type="text"
              name="email"
              placeholder="Please enter your email address"
              control={control}
            >
              {/* <IconEyeClose className="input-icon"></IconEyeClose> */}
            </Input>
          </Field>

          <Field>
            <Label htmlFor="password" className="label">
              Password
            </Label>
            <Input
              type={togglePassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              control={control}
            >
              {!togglePassword ? (
                <IconEyeClose
                  onClick={() => setTogglePassword(true)}
                ></IconEyeClose>
              ) : (
                <IconEyeOpen
                  onClick={() => setTogglePassword(false)}
                ></IconEyeOpen>
              )}
            </Input>
          </Field>

          <Button
            type="submit"
            disabled={true}
            isLoading={true}
            style={{
              maxWidth: 300,
              margin: "0 auto",
            }}
            // An se load 5s sumit
            // isLoading={isSubmitting}
            // disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
