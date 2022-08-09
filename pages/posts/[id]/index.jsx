import Head from 'next/head'
import styles from '/styles/Home.module.css'
import { Header } from '/components/Header'
import { useRouter } from 'next/router'

const PostsId = () => {
    const router = useRouter()
    console.log(router);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div>{router.query.id}やっほ</div>
    </div>
  )
}

export default PostsId;