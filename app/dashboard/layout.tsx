import styles from "./dashboard.module.css";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>

            <aside className={styles.sidebar}>
                <h1>KERN</h1>

                <nav>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/dashboard/profile">Profile</a>
                    <a href="/dashboard/team">Team</a>
                    <a href="/dashboard/verify">Verify CF</a>
                </nav>
            </aside>

            <div className={styles.mainArea}>

                <header className={styles.header}>
                    <span>KERN TERMINAL</span>

                    <button>
                        User
                    </button>
                </header>

                <main className={styles.content}>
                    {children}
                </main>

            </div>

        </div>
    );
}