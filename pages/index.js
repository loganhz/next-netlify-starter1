import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import netlifyIdentity from "netlify-identity-widget";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome xxxx to my app!" />
        <p
          className="description"
          onClick={() => {
            netlifyIdentity.open();
          }}
        >
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
