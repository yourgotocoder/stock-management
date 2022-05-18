import React, { useState } from "react";
import { useSession } from "next-auth/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./CreateNewUser.module.css";

type Props = {};

const CreateNewUser = (props: Props) => {
    const { data: session, status } = useSession();

    const [emailInputValue, setEmailInputValue] = useState("");
    const [emailInputError, setEmailInputError] = useState(false);

    const [empCodeInputValue, setEmpCodeInputValue] = useState("");
    const [empCodeInputError, setEmpCodeInputError] = useState(false);

    const [nameInputValue, setNameInputValue] = useState("");
    const [nameInputError, setNameInputError] = useState(false);

    const [roleInputValue, setRoleInputValue] = useState<string | null>("");
    const [roleInputError, setRoleInputError] = useState(false);

    const roles = ["admin", "faculty/staff"];

    const handleCreateNewUser = async () => {
        if (
            !emailInputError &&
            !empCodeInputError &&
            !nameInputError &&
            !roleInputError
        ) {
            const newUser = {
                emailId: emailInputValue,
                empCode: empCodeInputValue,
                name: nameInputValue,
                role: roleInputValue,
            };
            const response = await fetch("/api/auth/admin/create-users", {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(data);
            return;
        }
        return;
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                "& > :not(style)": {
                    m: 2,
                    width: 300,
                    minHeight: 400,
                    margin: "auto",
                    paddingBottom: "2rem",
                },
            }}
        >
            <Paper
                square
                variant="outlined"
                sx={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    display: "grid",
                    gridTemplateRows: "2fr 6fr",
                    borderRadius: "10px",
                    background: "rgba( 79, 140, 236, 0.1 )",
                }}
            >
                <div>
                    <h2>Create a New User</h2>
                </div>
                <div className={classes.form}>
                    <TextField
                        id="username"
                        onBlur={() =>
                            nameInputValue.trim().length === 0
                                ? setNameInputError(true)
                                : setNameInputError(false)
                        }
                        error={nameInputError}
                        required
                        label="Name"
                        sx={{
                            marginBottom: "15px",
                            width: "90%",
                        }}
                        onChange={(event) =>
                            setNameInputValue(event.target.value)
                        }
                        value={nameInputValue}
                    />
                    <TextField
                        id="empCode"
                        onBlur={() =>
                            empCodeInputValue.trim().length === 0
                                ? setEmpCodeInputError(true)
                                : setEmpCodeInputError(false)
                        }
                        error={empCodeInputError}
                        required
                        label="Emp Code"
                        sx={{
                            marginBottom: "15px",
                            width: "90%",
                        }}
                        onChange={(event) =>
                            setEmpCodeInputValue(event.target.value)
                        }
                        value={empCodeInputValue}
                    />
                    <TextField
                        id="email"
                        error={emailInputError}
                        type="email"
                        required
                        label="Email"
                        sx={{
                            marginBottom: "15px",
                            width: "90%",
                        }}
                        onBlur={() =>
                            emailInputValue.trim().length === 0 ||
                            !emailInputValue.includes("@")
                                ? setEmailInputError(true)
                                : setEmailInputError(false)
                        }
                        onChange={(event) =>
                            setEmailInputValue(event.target.value)
                        }
                        value={emailInputValue}
                    />

                    <Autocomplete
                        disablePortal
                        aria-required
                        onBlur={() =>
                            roleInputValue?.trim().length === 0
                                ? setRoleInputError(true)
                                : setRoleInputError(false)
                        }
                        className={roleInputError ? classes.error : ""}
                        id="roles"
                        options={roles}
                        sx={{
                            width: "90%",
                            display: "block",
                            marginBottom: "15px",
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Role" />
                        )}
                        onChange={(event, newValue) =>
                            setRoleInputValue(newValue)
                        }
                        value={roleInputValue}
                    />
                    <Button onClick={handleCreateNewUser} variant="contained">
                        Add User
                    </Button>
                </div>
            </Paper>
        </Box>
    );
};

export default CreateNewUser;
