import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { signOut, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import connectToDatabase from "../../lib/database";
import Navbar from "../../components/Navbar";
import AdminHome from "../../components/admin/AdminHome";

interface AdminProps {
    name: string;
    emailId: string;
    empCode: string;
    _id: string;
}

const AdminPage: NextPage<AdminProps> = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "unauthenticated") {
        router.replace("/signin");
    }

    return <AdminHome />;
};

export default AdminPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const client = await connectToDatabase();
    const db = client.db();
    const collection = db.collection("admin");

    const session = await getSession(context);

    if (session && session.user) {
        const email = session.user.email;
        const userData = await collection.findOne({ emailId: email });
        client.close();

        return {
            props: {
                ...userData,
                _id: userData?._id.toHexString(),
            },
        };
    }

    return {
        props: {},
    };
};
