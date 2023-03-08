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
      <div id="netlify-modal"></div>

      <main>
        <Header title="Welcome xxxx to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <button
          onClick={() => {
            console.log("xxxx");
            netlifyIdentity.init({
              container: "#netlify-modal", // defaults to document.body
              locale: "en", // defaults to 'en'
            });
            netlifyIdentity.open();
          }}
        >
          ccc
        </button>
      </main>

      <Footer />
    </div>
  );
}
