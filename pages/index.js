import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>HAPPY STEVEMAS</title>
        <meta name="description" content="Steve's 35th rotation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>HAPPY STEVEMAS!</h3>
        <p className={styles.description}>
          ’Twas the night before Stevemas, when all through the club
        </p>
        <p className={styles.description}>
          Not a creature was twerking, not even a thot
        </p>
        <p className={styles.description}>
          The stockings were hung by the dance floor with care
        </p>
        <p className={styles.description}>
          In hopes that St. Bartel soon would be there…
        </p>
        <strong className={styles.description}>
          The greatest honor of Stevemas is to become an Elf! Complete these 6
          tasks and St. Bartel will give your Elven name!
        </strong>
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
