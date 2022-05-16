import { NextComponentType } from "next";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SignInForm from "./SIgnInForm";
import classes from "./Navbar.module.css";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


type NavbarProps = {
  isAuthenticated: boolean;
  sessionData?: {
    name: string;
    _id: string;
    emailId: string;
    empCode: string;
  };
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
        <Tooltip title="Go to Home" placement="right">
          <HomeIcon sx={{ fontSize: 40 }}></HomeIcon>
        </Tooltip>
        <div className={classes.logo}>
          <img src="" alt="" />
        </div>
      </div>
      <div className={classes.siginInButto}>
        {!signInVisible && (
          <Button onClick={showSignInForm} variant="contained">
            Sign In
          </Button>
        )}
        {signInVisible && (
          <Modal
            open={signInVisible}
            onClose={showSignInForm}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter your email to get a sign-in link
              </Typography>
              <SignInForm />
            </Box>
          </Modal>
        )}
      </div>
    </div>
  );
};
export default Navbar;
