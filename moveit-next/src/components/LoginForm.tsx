import styles from "../styles/components/LoginForm.module.css";
import { Input } from "../components/Input";

export function LoginForm() {
  return (
    <div className={styles.loginForm}>
      <header>
        <img src="/logo-white.svg" alt="" />
      </header>

      <main>
        <h2>Bem-vindo</h2>

        <div className={styles.git}>
          <img src="/icons/github.svg" alt="Github" />
          <p>Faça login com seu Github para começar</p>
        </div>

        <Input placeholder="Digite seu username" />
      </main>
    </div>
  );
}
