import LoginForm from '../components/auth/LoginForm';
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <main className={styles.loginCard}>
        <h1 className={styles.loginTitle}>Login</h1>
        <LoginForm />
      </main>
    </div>
  );
}
