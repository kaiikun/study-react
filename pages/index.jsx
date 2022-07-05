import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback } from 'react'

export default function Home() {
  const foo = "1";
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <a 
        href="/about"
        onClick={handleClick}>ボタン
      </a>
      
      <Main page="index" />
     <Footer />
    </div>
  )
}
