import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Challenges.module.css";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/router";

export default function Challenges(props) {
  const router = useRouter();

  const UserData = useContext(UserContext);
  const { isLogged } = UserData;

  useEffect(() => {
    isLogged() ? null : router.push("/");
  }, []);

  if (!isLogged()) return null;

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Desafios | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}
