import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeProvider } from '../contexts/ChallengeContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { Footer } from '../components/Footer';

import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  level: number; 
  currentExperience: number; 
  challengesCompleted: number; 
}

export default function Home({ 
  level, 
  currentExperience, 
  challengesCompleted
}: HomeProps) {
  return (
    <ChallengeProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
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
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
        <Footer/>
      </div>
    </ChallengeProvider>
  );
}

/* CONSULTA DA API */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 
    level, 
    currentExperience, 
    challengesCompleted 
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),

    }
  }
}