import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
   const { data: session, status } = useSession()

  if (status === 'loading') {
    return <>Loading...</>
  }

  if (status === 'authenticated' && session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  if (status === 'unauthenticated') {
    return (
      <>
        Not signed in <br />
        <Link href='/api/auth/signin'>
          <a>Login</a>
        </Link>
      </>
    )
  }
  return <p></p>
  
}

export default Home
