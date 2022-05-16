import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router'

const Home: NextPage = () => {
   const { data: session, status } = useSession();
   const router = useRouter();

  if (status === 'loading') {
    return <>Loading...</>
  }

  if (status === 'authenticated' && session && session.user) {
    router.replace("/admin")
  }

  
  return <p>Default state</p>
  
}

export default Home
