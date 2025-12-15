import RegisterForm from '../components/auth/RegisterForm';
import styles from './Login.module.css';

export default function Register() {
  return (
    <div className={styles.loginContainer}>
      <main className={styles.loginCard}>
        <h1 className={styles.loginTitle}>Create Account</h1>
        <RegisterForm />
      </main>
    </div>
  );
}
