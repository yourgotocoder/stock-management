import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {};

const ActionCard = (props: Props) => {
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
                    Some Actions
                </Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
};

export default ActionCard;
