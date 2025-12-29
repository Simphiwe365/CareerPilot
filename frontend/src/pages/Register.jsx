import RegisterForm from '../components/auth/RegisterForm';
import styles from './Login.module.css';

export default function Register() {
  return (
    <div className={styles.simpleContainer}>
      <main className={styles.simpleCard}>
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontWeight: 700, fontSize: 20 }}>CareerPilot</div>
          <p style={{ margin: 0, color: '#6b7280' }}>Start your career journey today</p>
        </div>

        <h1 className={styles.simpleTitle}>Create Account</h1>
        <p className={styles.simpleSubtitle}>Join thousands building their careers</p>
        <RegisterForm />

        <p className={styles.simpleFooter}>
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </main>
    </div>
  );
}
