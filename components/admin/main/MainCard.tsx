import React from "react";
import Card from "@mui/material/Card";

type Props = {};

const MainCard = (props: Props) => {
    return (
        <Card
            sx={{
                minWidth: 275,
                minHeight: "100%",
                maxHeight: "100%",
                padding: "1rem",
            }}
        >
            some context
        </Card>
    );
};

export default MainCard;
