
import { useCallback, useEffect, useState, useReducer } from 'react' 

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

export default function Posts(props) { 
  // const [posts,setPosts] = useState([]);
  // const [loading,setLoading] = useState(true);
  // const [error,setError] = useState(null);
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
    // setLoading(false);
    // setState(prevState => {
    //   return{
    //     ...prevState,
    //     loading : false,
    //   }
    // })
  },[])

// getPostsの実行をする関数の定義↓
  useEffect(() => {
    getPosts();
  },[getPosts])

if (state.loading){
    return <div>読み込みなう</div> 
}
if (state.error){
    return <div>{state.error.message}</div> 
}
if (state.data.length === 0){
    return <div>データは空だよ</div> 
}


  return (
    <div>
        <ol>
          {state.data.map(post => {
            return(
              <li key={post.id}>{post.title}</li>
            )
          })}
        </ol>
    </div>
  )
}


