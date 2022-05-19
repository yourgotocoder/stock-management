import React from "react";
import Skeleton from "@mui/material/Skeleton";

type Props = {};

const Loading = (props: Props) => {
    return (
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
    );
};

export default Loading;
