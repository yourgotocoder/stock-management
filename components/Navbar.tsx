import { NextComponentType } from "next";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import SignInForm from "./SIgnInForm";
import classes from "./Navbar.module.css";

type NavbarProps = {
  isAuthenticated: boolean;
  sessionData?: {
    name: string;
    _id: string;
    emailId: string;
    empCode: string;
  };
};

const Navbar: NextComponentType<{}, {}, NavbarProps> = ({
  isAuthenticated,
  sessionData,
}) => {
  const [signInVisible, setSignInVisible] = useState(false);

  const { data: session, status } = useSession();

  console.log(session);

  const handleSignOut = () => {
    signOut();
  };

  const showSignInForm = () => {
    setSignInVisible((prevState) => !prevState);
  };

  if (isAuthenticated) {
    return (
      <div>
        Nav {sessionData?.name} <button onClick={handleSignOut}>Signout</button>
      </div>
    );
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.title}>
        <span>Navbar</span>
        <div className={classes.logo}>
          <img src="" alt="" />
        </div>
      </div>
      <div className={classes.siginInButto}>
        {!signInVisible && (
          <button type="button" onClick={showSignInForm}>
            Sign In
          </button>
        )}
        {signInVisible && <SignInForm />}
      </div>
    </div>
  );
};
export default Navbar;
