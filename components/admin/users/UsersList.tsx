import React, { useContext } from "react";
import AdminContext from "../../../store/admin-context";

type Props = {};

const UsersList = (props: Props) => {
    const adminContext = useContext(AdminContext);
    return (
        <div>
            {adminContext.userList.map((user) => (
                <li key={user.empCode}>{user.emailId}</li>
            ))}
        </div>
    );
};

export default UsersList;
