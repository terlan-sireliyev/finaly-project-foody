import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";

const Home: NextPage = () => {
  const handleCreateProduct = () => {
    axios({
      method: "POST",
      url: "/api/products",
      data: {
        name: "Burger Murad",
        description: "Lorem",
        img_url:
          "data:image/jpeg;base64,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",
        rest_id: "RwdWe3223wwew",
        price: 9.9,
      },
    });
  };

  const handleCreateResturant = () => {
    axios({
      method: "POST",
      url: "/api/restuarants",
      data: {
        name: "Murad Rest",
        category_id: "3222323fds",
        img_url: "string",
        cuisine: "Lorem",
        address: "Lorem",
        delivery_min: 40,
        delivery_price: 2.5,
      },
    });
  };

  // const handleUpload = (e: any) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   axios({
  //     method: "POST",
  //     url: "/api/uploads",
  //     headers: {
  //       "Content-Type": "multi-part",
  //     },
  //     data: formData,
  //   });
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div>
          <button onClick={handleCreateProduct}>Create Product</button>
          <button onClick={handleCreateResturant}>Create Resturant</button>
        </div>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
