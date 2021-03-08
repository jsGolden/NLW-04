import styles from "../styles/components/Input.module.css";
import { MdArrowForward } from "react-icons/md";
import { useContext, useState } from "react";

import { UserContext } from "../contexts/UserContext";

interface InputProps {
  placeholder: string;
}

export function Input(props: InputProps) {
  const [username, setUsername] = useState("");

  const { handleLogin } = useContext(UserContext);

  async function login() {
    if (!username) return;
    handleLogin(username);
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <a className={username ? styles.buttonActive : ""} onClick={login}>
        <MdArrowForward size={25} />
      </a>
    </div>
  );
}
