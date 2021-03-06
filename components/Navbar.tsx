import { NextComponentType } from "next";
import { signOut, useSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SignInForm from "./SIgnInForm";
import classes from "./Navbar.module.css";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import MainContext from "../store/main-context";

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

const Navbar: NextComponentType = (props) => {
    const mainCtx = useContext(MainContext);

    const [signInVisible, setSignInVisible] = useState(false);

    const { data: session, status } = useSession();

    const handleSignOut = () => {
        signOut();
    };

    const showSignInForm = () => {
        setSignInVisible((prevState) => !prevState);
    };

    return (
        <div className={classes.navbar}>
            <div className={classes.title}>
                <div className={classes["title-items"]}>
                    <div onClick={() => mainCtx.setCurrentAction("")}>
                        <Tooltip title="Homepage" placement="right">
                            <a>
                                <HomeIcon sx={{ fontSize: 40 }}></HomeIcon>
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className={classes.siginInButto}>
                {!signInVisible && (
                    <Tooltip title="Click to get email link" placement="left">
                        {status !== "authenticated" ? (
                            <Button
                                onClick={showSignInForm}
                                variant="contained"
                            >
                                Sign In
                            </Button>
                        ) : (
                            <Button onClick={handleSignOut} variant="contained">
                                Signout
                            </Button>
                        )}
                    </Tooltip>
                )}
                {signInVisible && (
                    <Modal
                        open={signInVisible}
                        onClose={showSignInForm}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
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
