import Link from 'next/link';
import styles from './icons.module.css'
import Image from 'next/image';

import { FaRegStar, FaMoon, FaCloud    }  from "react-icons/fa";

const DevIcons = () => {

    return (
        <div className={styles.container}>
            <div className={styles.sky}>
            
            <div className={styles.skyRow}>
            <FaMoon size={40} />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />

            </div>

            <div className={styles.skyRow}>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            
            </div>
            <div className={styles.skyRow}>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />

            </div>

            </div>

            <div className={styles.clouds}>
                <div className={styles.cloudsRow}>
                <FaCloud size={70} />
                <FaCloud size={90} />
                <FaCloud size={40} />
                <FaCloud size={80} />
                <FaCloud size={100} />
                
                </div>
            </div>
        </div>
    )

}

export default DevIcons;