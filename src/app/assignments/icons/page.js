import styles from './page.module.css';
import DevIcon from '@/components/DevIcons/devicons';

export default async function Page() {

    return (
    <main className={styles.page}>
        Icons
        <DevIcon />
        
    </main>
    )
}