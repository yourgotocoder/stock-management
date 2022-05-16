import React, { useState } from "react";
import { signIn, SignInResponse } from "next-auth/react";

type SingInData = {
  error: string;
  ok: boolean;
  status: number;
  url: string | null;
};

const SignInForm = () => {
  const [emailInputValue, setEmailInputValue] = useState("");

  const [loginState, setLoginState] = useState<SingInData>();

  const [logginIn, setLogginIn] = useState(false);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setLogginIn(true);
    const loginData = await signIn("email", {
      email: emailInputValue,
      redirect: false,
    });
    setLoginState(loginData);
    if (loginData) {
      setLogginIn(false);
    }
  };

  const resetLoginState = () => {
    setLoginState(undefined);
    setEmailInputValue('');
  }

  let emailForm;

  if (!logginIn) {
    emailForm = (
      <>
        <label>
          Email address
          <input
            type="email"
            id="email"
            name="email"
            value={emailInputValue}
            onChange={(event) => setEmailInputValue(event.target.value)}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Sign in with Email
        </button>
      </>
    );
  }

  if (logginIn && !loginState) {
    emailForm = (
      <>
        Verifying {emailInputValue}
      </>
    )
  }

  if (!logginIn && loginState?.url) {
    emailForm = (
      <>
        An email link has been sent to {emailInputValue}, please login using that link
      </>
    )
  }

  if (!logginIn && loginState?.error) {
    emailForm = (
      <>
        {loginState.error} <button onClick={resetLoginState}>Enter a valid email</button>
      </>
    )

  }


  return <div>{emailForm}</div>;
};

export default SignInForm;
