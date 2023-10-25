import styles from './page.module.css';
import Header from './components/Header';
import NewPassword from './components/NewPassword';
import Password from './components/Password';
import 'bootstrap/dist/css/bootstrap.min.css';

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
