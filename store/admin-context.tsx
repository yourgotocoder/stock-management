import { createContext, useEffect, useState } from "react";

type UserList = {
    name: string;
    empCode: string;
    emailId: string;
    role: string;
};

interface AdminContextInterface {
    userList: UserList[];
}

const AdminContext = createContext<AdminContextInterface>({
    userList: [],
});

type Props = {
    children: React.ReactNode;
};

type GetUsers = () => Promise<UserList[]>;

export function AdminContextProvider(props: Props) {
    const [userList, setUserList] = useState<UserList[]>([]);
    useEffect(() => {
        const getUserList: GetUsers = async () => {
            const response = await fetch("/api/auth/admin/get-user-list");
            const data = await response.json();
            return data;
        };
        getUserList().then((data) => setUserList(data));
    }, []);

    const context = {
        userList,
    };

    return (
        <AdminContext.Provider value={context}>
            {props.children}
        </AdminContext.Provider>
    );
}

export default AdminContext;
