
import { useCallback, useEffect, useState } from 'react' 

export default function Posts(props) { 
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  const getPosts = useCallback(async() => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok){
        throw new Error("エラーが発生したため読み込めないっす");
      }
      const json = await res.json();
      console.log(json);
      setPosts(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  },[])

// getPostsの実行をする関数の定義↓
  useEffect(() => {
    getPosts();
  },[getPosts])

if (loading){
    return <div>読み込みなう</div> 
}
if (error){
    return <div>{error.message}</div> 
}
if (posts.length === 0){
    return <div>データは空だよ</div> 
}


  return (
    <div>
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


