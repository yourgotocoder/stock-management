import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/UI/Layout";
import { MainContextProvider } from "../store/main-context";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Head>
                <title>
                    Stock Management App | CSE | Designed By Sudarshan Rai
                </title>
                <meta charSet="UTF-8" />
            </Head>
            <MainContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MainContextProvider>
        </SessionProvider>
    );
}

export default MyApp;
