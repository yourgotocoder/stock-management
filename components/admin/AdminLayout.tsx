import React from "react";
import classes from "./AdminLayout.module.css";
import UserProfile from "./users/UserProfile";

type Props = {};

const AdminLayout = (props: Props) => {
    return (
        <div className={classes["main-grid"]}>
            <div className={classes["nav-grid"]}>
                <div>A</div>
                <div>B</div>
            </div>
            <div className={classes["action-area"]}></div>
            <div className={classes["side-grid"]}>
                <div>
                    <UserProfile />
                </div>
                <div>b</div>
                <div>c</div>
            </div>
        </div>
    );
};

export default AdminLayout;
