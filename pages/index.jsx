import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow,setIsShow] = useState(true);
  const [array,setArray] = useState([]);

  const handleClick = (e) => {
    setCount((count) => count + 1)
  }

  const handleDisplay = useCallback(() => {
    setIsShow( (isShow) => {
      return !isShow;
    })
  })

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ奴はだめ")
      }
      const newArray = [...prevArray,text];
      return newArray;
    });
  },[text]);

  useEffect(()=>{
    document.body.style.background = "lightblue";
    return() => {
      document.body.style.background = "";
    };
  });

  const handleChange = useCallback((e) => {
    setText(e.target.value)
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <input 
        type="text" 
        value={text} 
        onChange={handleChange}/>
      <button 
        onClick={handleClick}>ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <button onClick={handleAdd}>テェい</button>
      <ul>{array.map(item => {
        return(
          <list key={item}>{item}</list>
        )
        
      })}</ul>
      <Main page="index" />
     <Footer />
    </div>
  )
}
