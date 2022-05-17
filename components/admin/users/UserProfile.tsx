import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {};

const UserProfile = (props: Props) => {
    return (
        <Card sx={{ minWidth: 275, maxHeight: "98%" }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Signed In as
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    User
                </Typography>
                <Typography variant="body2">Role</Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
};

export default UserProfile;