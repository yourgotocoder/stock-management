import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupIcon from "@mui/icons-material/Group";
import classes from "./ActionCard.module.css";
import MainContext from "../../../store/main-context";

type Props = {};

const ActionCard = (props: Props) => {
    const mainCtx = useContext(MainContext);

    return (
        <Card sx={{ minWidth: 275, minHeight: "80%", maxHeight: "98%" }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Actions
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <div
                        className={classes["action-list"]}
                        onClick={() => mainCtx.setCurrentAction("add-user")}
                    >
                        <PersonAddAltIcon /> <span>Add new member</span>
                    </div>
                    <div
                        className={classes["action-list"]}
                        onClick={() => mainCtx.setCurrentAction("view-user")}
                    >
                        <GroupIcon /> <span>View members</span>
                    </div>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ActionCard;
