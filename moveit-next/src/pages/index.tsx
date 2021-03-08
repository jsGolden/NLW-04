import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import { LoginForm } from "../components/LoginForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | moveit</title>
      </Head>
      <section>
        <div>
          <img className={styles.bodyLogo} src="/logo-body.svg" alt="" />
        </div>

        <LoginForm />
      </section>
    </div>
  );
}
