import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font family
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});


const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Afnan Ahmed</title>
        <meta
          name="description"
          content="Afnan Ahmed Siddiqui is a dynamic and award-winning entrepreneur."
        />
        <meta
          name="keywords"
          content="Web3, Big Data, Hadoop, Oracle, Fusion Applications, Microsoft Technologies"
        />
        <meta name="author" content="Afnan Ahmed" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};


export default Layout;
