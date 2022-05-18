import React from "react";
import { useSession } from "next-auth/react";

type Props = {};

const CreateNewUser = (props: Props) => {
    const { data } = useSession();

    const handleCreateNewUser = async () => {
        const response = await fetch("/api/auth/admin/create-users", {
            method: "POST",
            body: JSON.stringify({ message: "" }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <button onClick={handleCreateNewUser}>Send Request</button>
        </div>
    );
};

export default CreateNewUser;
