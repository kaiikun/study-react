import styles from '../styles/Home.module.css'

export default function Headline(props) {
  return (
    <div >
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{props.title} page</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/{props.title}.js</code>
        </p>

    </div>
  )
}
