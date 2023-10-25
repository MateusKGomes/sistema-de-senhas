import styles from './page.module.css'
import Header from './components/Header'
import Title from './components/Password'
import NewPassword from './components/NewPassword'
import Password from './components/Password'

export default function Home() {
  return (
    <main className={styles.main}>

      <div>
        <Header />
        <Password senha={''} />
        <NewPassword></NewPassword>

      </div>

    </main>
  )
}
