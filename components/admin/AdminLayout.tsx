import React from "react";
import ActionCard from "./action/ActionCard";
import classes from "./AdminLayout.module.css";
import MainCard from "./main/MainCard";
import SummaryCard from "./SummaryCard";
import UserProfile from "./users/UserProfile";

type Props = {};

const AdminLayout = (props: Props) => {
    return (
        <div className={classes["main-grid"]}>
            <div className={classes["nav-grid"]}>
                <div>A</div>
                <div>B</div>
            </div>
            <div className={classes["action-area"]}>
                <MainCard></MainCard>
            </div>
            <div className={classes["side-grid"]}>
                <div>
                    <UserProfile />
                </div>
                <div>
                    <ActionCard />
                </div>
                <div>
                    <SummaryCard />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
