import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react' 


/* カウントのReact講座で使った */
// const useCounter = () => {
//   const [count, setCount] = useState(1);
//   const [isShow,setIsShow] = useState(true);

//   const handleClick = (e) => {
//     setCount((count) => count + 1)
//   }
  
//   const handleDisplay = () => {
//     setIsShow( (isShow) => {
//       return !isShow;
//     })
//   }

//   return(count, isShow , handleClick, handleDisplay)
// }

export default function Home(props) { 
  const [posts,setPosts] = useState([]);

  const getPosts = useCallback(async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    console.log(json);
    setPosts(json);
  },[])

// getPostsの実行をする関数の定義↓
  useEffect(() => {
    getPosts();
  },[getPosts])


  /* カウントのReact講座で使った */
  // console.log(props)
  // const {count, isShow , handleClick, handleDisplay} = useCounter()
  // const [text, setText] = useState("");
  // const [array,setArray] = useState([]);

  // const handleAdd = useCallback(() => {
  //   setArray((prevArray) => {
  //     if (prevArray.some((item) => item === text)) {
  //       alert("同じ奴はだめ")
  //     }
  //     const newArray = [...prevArray,text];
  //     return newArray;
  //   });
  // },[text]);

  // useEffect(()=>{
  //   document.body.style.background = "lightblue";
  //   return() => {
  //     document.body.style.background = "";
  //   };
  // });

  // const handleChange = (e) => {
  //   setText(e.target.value)
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <ol>
        {posts.map(post => {
          return(
            <li key={post.id}>{post.title}</li>
          )
        })}
      </ol>
    </div>
  )
}
