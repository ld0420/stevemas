import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Happy Stevemas</title>
        <meta name="description" content="Steve's 35th rotation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>HAPPY STEVEMAS!</h3>
        <div className={styles.grid}>
          <button
            type="button"
            onClick={() => router.push("/quest")}
            className={styles.card}
          >
            <h2>Enter the Quest &rarr;</h2>
          </button>

          {/* <button
            className={styles.card}
            type="button"
            onClick={() => router.push("/messages")}
          >
            <h2>Leave a birthday message &rarr;</h2>
          </button> */}
        </div>
      </main>
    </div>
  );
}
