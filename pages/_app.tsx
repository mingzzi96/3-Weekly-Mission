import "../styles/reset.css";
import "../styles/theme.css";
import Layout from "@/components/Layout";
import { NextPage } from "next";

interface MyAppProps {
  Component: NextPage;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
