import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Loading from "../../UI/Loading";

type Props = {};
type User = {
    name: string;
    empCode: string;
    emailId: string;
    role: string;
};

const UserProfile = (props: Props) => {
    const [userProfile, setUserProfile] = useState<User | undefined>();
    useEffect(() => {
        fetch("/api/auth/admin/get-user-profile")
            .then((response) => response.json())
            .then((data: User) => setUserProfile(data));
    }, []);

    let cardContent;

    if (userProfile === undefined) {
        cardContent = <Loading />;
    } else {
        cardContent = (
            <>
                <Typography
                    sx={{ fontSize: "1rem" }}
                    color="text.secondary"
                    gutterBottom
                >
                    Signed In as <br /> {userProfile.name} (
                    {userProfile.empCode})
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography sx={{ mb: 0.8 }} color="text.secondary">
                    {userProfile.emailId}
                </Typography>
                <Typography variant="body2">
                    <span style={{ textTransform: "capitalize" }}>
                        {userProfile.role}
                    </span>
                </Typography>
            </>
        );
    }

    return (
        <Card sx={{ minWidth: 275, maxHeight: "98%" }}>
            <CardContent>{cardContent}</CardContent>
        </Card>
    );
};

export default UserProfile;
