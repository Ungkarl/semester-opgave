import styles from './devAssignmentsNavBtn.module.css';
import { 
    FaJsSquare,
} from "react-icons/fa";
import Link from 'next/link';

const DevAssignmentsNavBtn = ({link, title}) => { 

    return (
        <div className={styles.navBtn}>
            <Link href={`${link}`}><FaJsSquare /> {title}</Link>
        </div>
        
    );

};

export default DevAssignmentsNavBtn;