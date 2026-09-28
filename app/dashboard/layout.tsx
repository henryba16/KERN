import styles from "./dashboard.module.css";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>

            <header className={styles.header}>
                <Link href="/">
                    <span>KERN TERMINAL</span>
                </Link>

                <button>
                    User
                </button>
            </header>

            <div className={styles.body}>

                <aside className={styles.sidebar}>
                    <nav>
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/dashboard/profile">Profile</Link>
                        <Link href="/dashboard/team">Team</Link>
                        <Link href="/dashboard/verify">Verify CF</Link>
                    </nav>
                </aside>

                <main className={styles.content}>
                    {children}
                </main>

            </div>

        </div>
    );
}