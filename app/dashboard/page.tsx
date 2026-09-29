import styles from "./dashboard.module.css";
import Link from "next/link";

export default function Dashboard() {
    return (
        <>
            <Link href="/dashboard/profile" className={styles.profileCard}>
                <span className={styles.avatar}>U</span>
                <span className={styles.profileText}>
                    <span className={styles.profileTitle}>Welcome back, username</span>
                    <span className={styles.profileSub}>View your profile</span>
                </span>
                <span className={styles.profileArrow} aria-hidden="true">→</span>
            </Link>

            <section className={styles.box}>
                <h2>Recent Contests</h2>
                <p>No contests yet.</p>
            </section>
        </>
    );
}