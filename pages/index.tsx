import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
const Home: NextPage = () => {
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
      <h1>home123</h1>
    </div>
  );
};

export default Home;
