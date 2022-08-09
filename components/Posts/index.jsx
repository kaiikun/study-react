
import Link from 'next/link';
import { useCallback, useEffect, useState, useReducer } from 'react' 
import useSWR from 'swr'

const initialStage = {
  data : [],
  loading : true,
  error : null, 
}

const reducer = (state,action) => {
  switch (action.type) {
    case "end":
      return{
        ...state,
        data: action.data,
        loading : false,
      };
    case "error":
      return{
        ...state,
        loading : false,
        error : action.error,
      };
    default:
      throw new Error("No such action")
  }
}

export default function Posts() { 
  // const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts");
  // console.log({data, error});

  const [state,dispatch] = useReducer(reducer,initialStage)
  const getPosts = useCallback(async() => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok){
        throw new Error("エラーが発生したため読み込めないっす");
      }
      const json = await res.json();
      dispatch({type:"end",data:json})
    } catch (error) {
     dispatch({type:"error",error}) 
    }
  },[])

// getPostsの実行をする関数の定義↓
  useEffect(() => {
    getPosts();
  },[getPosts])

if (state.data === 0){
    return <div>読み込みなう</div> 
}
if (state.error){
    return <div>{error.message}</div> 
}
if (state.data.length === 0){
    return <div>データは空だよ</div> 
}


  return (
    <div>
        <ol>
          {state.data.map(post => {
            return(
              <li key={post.id}>
                <Link href={`posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            )
          })}
        </ol>
    </div>
  )
}


