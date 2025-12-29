import LoginForm from '../components/auth/LoginForm';
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.simpleContainer}>
      <main className={styles.simpleCard}>
        <h1 className={styles.simpleTitle}>Welcome Back</h1>
        <p className={styles.simpleSubtitle}>Sign in to continue to CareerPilot</p>
        <LoginForm />
        <p className={styles.simpleFooter}>
          Don't have an account? <a href="/register">Create one</a>
        </p>
      </main>
    </div>
  );
}
