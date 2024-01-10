import styles from "./layout.module.css"
import DevAssignmentsNavBtn from "@/components/devAssignmentsNavigation/devAssignmentsNavBtn/devAssignmentsNavBtn.module"

export default function AssignmentsLayout({ children }) {
    return <section className={styles.layout}>
        <div className={styles.navigation}>
            <div className={styles.navContainer}>
            <DevAssignmentsNavBtn link={'/assignments'} title={'Assignments'} />
            <DevAssignmentsNavBtn link={'/assignments/icons'} title={'Icons'} />
            </div>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </section>
}