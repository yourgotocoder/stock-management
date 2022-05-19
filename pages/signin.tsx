import { stat } from "fs";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "../components/UI/Loading";

const SignIn: NextPage = (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <Loading></Loading>;
    }

    if (status === "authenticated") {
        router.replace("/admin");
    }

    if (status === "unauthenticated") {
        router.replace("/");
    }

    return <></>;
};

export default SignIn;
