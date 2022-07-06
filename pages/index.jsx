import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => count + 1)
  }

  useEffect(()=>{
    document.body.style.background = "lightblue";
    return() => {
      document.body.style.background = "";
    };
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div>{count}</div>
      <button 
        onClick={handleClick}>ボタン
      </button>
      <Main page="index" />
     <Footer />
    </div>
  )
}
