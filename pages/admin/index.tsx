import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const AdminPage: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

 
  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    router.replace("/signin")
  }

  return <p>Admin Page</p>;
};

export default AdminPage;
