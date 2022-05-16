import type { NextPage } from "next";
import Head from "next/head";
import {  useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <>Loading...</>;
  }

  if (status === "authenticated" && session && session.user) {
    router.replace("/admin");
  }

  return (
    <>
      Default state
    </>
  );
};

export default Home;
