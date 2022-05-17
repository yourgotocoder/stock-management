import React, { useContext } from "react";
import Card from "@mui/material/Card";
import MainContext from "../../../store/main-context";
import CreateNewUser from "../users/CreateNewUser";

type Props = {};

const MainCard = (props: Props) => {
    const mainCtx = useContext(MainContext);

    let cardContent;

    switch (mainCtx.currentAction) {
        case "":
            cardContent = <p>Default</p>;
            break;
        case "add-user":
            cardContent = <CreateNewUser />;
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
