import React, { useContext } from "react";
import Card from "@mui/material/Card";
import MainContext from "../../../store/main-context";
import CreateNewUser from "../users/CreateNewUser";
import UsersList from "../users/UsersList";

type Props = {};

const MainCard = (props: Props) => {
    const mainCtx = useContext(MainContext);

    let cardContent;

    console.log(mainCtx.currentAction);

    switch (mainCtx.currentAction) {
        case "":
            cardContent = <div>Default</div>;
            break;
        case "add-user":
            cardContent = <CreateNewUser />;
            break;
        case "view-user":
            cardContent = <UsersList />;
            break;
    }

    return (
        <Card
            sx={{
                minWidth: 275,
                minHeight: "100%",
                maxHeight: "100%",
                padding: "1rem",
            }}
        >
            {cardContent}
        </Card>
    );
};

export default MainCard;
