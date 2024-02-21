import Head from "next/head";
import "../styles/reset.css";
import "../styles/theme.css";
import LinkbraryLogo from "@/public/assets/images/logos/logo.svg";
import Layout from "@/components/Layout";
import { NextPage } from "next";

interface MyAppProps {
  Component: NextPage;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Linkbrary" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:image" content={LinkbraryLogo} />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
