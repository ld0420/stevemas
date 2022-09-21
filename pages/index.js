import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Stevemas!</title>
        <meta name="description" content="Steve's 35th rotation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Stevemas!</h1>
        <p className={styles.description}>Please go wild!</p>

        <div className={styles.grid}>
          <button
            type="button"
            onClick={() => router.push("/quest")}
            className={styles.card}
          >
            <h2>Enter the Quest &rarr;</h2>
            <p>Description here</p>
          </button>

          <button
            className={styles.card}
            type="button"
            onClick={() => router.push("/create")}
          >
            <h2>Leave a birthday message for Steve &rarr;</h2>
            <p>description</p>
          </button>

          {/* <a
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
          </a> */}
        </div>
      </main>
    </div>
  );
}
