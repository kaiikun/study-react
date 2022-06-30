import styles from '../styles/Home.module.css'

export function Headline(props) {
  return (
    <div >
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{props.title} page</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          {props.children}
          <button onClick={props.onClick}>ボタン</button>
        </p>
        

    </div>
  )
}
