import axios from "axios";
import { useRouter } from "next/router";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import swal from "sweetalert";
import Cookies from "js-cookie";

interface UserData {
  _id?: number;
  avatar_url: string;
  login: string;
  name: string;
  id: number;
  currentExperience: number;
  challengesCompleted: number;
  level: number;
  created_at?: Date;
}

interface GithubUserResponse {
  avatar_url: string;
  login: string;
  name: string;
  id: number;
}

interface UserContextData {
  user: UserData;
  handleLogin: (username: string) => void;
  isLogged: () => boolean;
  setUser: Dispatch<SetStateAction<UserData>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const router = useRouter();

  const [user, setUser] = useState({} as UserData);

  useEffect(() => {
    const login = Cookies.get("login");
    if (login) {
      getDatabaseUser(login).then((user) => {
        if (!user) return;
        setUser(user);
        router.push("/challenges");
      });
    }
  }, []);

  useEffect(() => {
    if (!isLogged()) return;
    updateDatabaseUser(user);
  }, [user]);

  async function handleLogin(username: string) {
    let user: UserData = await getDatabaseUser(username);
    if (!user) {
      const githubUser = await getGithubUser(username);
      if (!githubUser) return swal("Oops", "Usuário não encontrado", "error");
      const userData = {
        avatar_url: githubUser.avatar_url,
        login: githubUser.login,
        name: githubUser.name,
        id: githubUser.id,
        currentExperience: 0,
        challengesCompleted: 0,
        level: 0,
      };
      user = await saveDatabaseUser(userData);
      if (!user)
        return swal("Oops", "Erro ao salvar no banco de dados!", "error");
    }
    if (user) {
      setUser(user);
      router.push("/challenges");
      Cookies.set("login", user.login);
    }
  }

  async function getDatabaseUser(username: string) {
    const userResponse = await axios.get<UserData>(
      `/api/users?login=${username}`
    );
    return userResponse.data;
  }

  async function saveDatabaseUser(user: UserData) {
    const userResponse = await axios.post("/api/users", {
      user,
    });
    return userResponse.data;
  }

  async function updateDatabaseUser({
    login,
    challengesCompleted,
    currentExperience,
    level,
  }: UserData) {
    if (!login) return;
    await axios.patch("/api/users", {
      user: {
        login,
        challengesCompleted,
        currentExperience,
        level,
      },
    });
  }

  async function getGithubUser(username: string): Promise<GithubUserResponse> {
    let userData: GithubUserResponse;
    try {
      const userResponse = await axios.get<GithubUserResponse>(
        `https://api.github.com/users/${username}`
      );
      userData = userResponse.data;
      return userData;
    } catch (error) {
      return userData;
    }
  }

  function isLogged() {
    return Object.keys(user).length > 0 ? true : false;
  }

  return (
    <UserContext.Provider value={{ user, handleLogin, isLogged, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
