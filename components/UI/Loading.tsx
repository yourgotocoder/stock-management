import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

type Props = {
    type?: "action" | "first-load" | "profile-card";
};

const Loading = (props: Props) => {
    const { type } = props;

    let skeleton = (
        <>
            <Skeleton
                variant="rectangular"
                sx={{
                    minWidth: "50%",
                    maxWidth: "80%",
                    height: "20vh",
                    margin: "5px auto",
                }}
            ></Skeleton>
        </>
    );

    if (type === "first-load") {
        skeleton = (
            <div style={{ height: "80vh" }}>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        minWidth: "50%",
                        maxWidth: "80%",
                        height: "20vh",
                        margin: "5px auto",
                    }}
                ></Skeleton>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        minWidth: "50%",
                        maxWidth: "80%",
                        height: "20vh",
                        margin: "5px auto",
                    }}
                ></Skeleton>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        minWidth: "50%",
                        maxWidth: "80%",
                        height: "20vh",
                        margin: "5px auto",
                    }}
                ></Skeleton>
            </div>
        );
    }

    if (type === "action") {
        skeleton = (
            <>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        minWidth: "50%",
                        maxWidth: "80%",
                        minHeight: "1rem",
                        maxHeight: "100%",
                        margin: "5px auto",
                    }}
                ></Skeleton>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        minWidth: "50%",
                        maxWidth: "80%",
                        minHeight: "1rem",
                        maxHeight: "100%",
                        margin: "5px auto",
                    }}
                ></Skeleton>
            </>
        );
    }

    if (type === "profile-card") {
        skeleton = (
            <>
                <Stack spacing={1}>
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={118} />
                </Stack>
            </>
        );
    }

    return <>{skeleton}</>;
};

export default Loading;
