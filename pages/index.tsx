import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Loading from "../components/UI/Loading";

const Home: NextPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <Loading type="first-load"></Loading>;
    }

    if (status === "authenticated" && session && session.user) {
        router.replace("/admin");
    }

    if (router.query.error) {
        return <>Link already used to login, please request for another link</>;
    }

    return <>Default</>;
};

export default Home;
