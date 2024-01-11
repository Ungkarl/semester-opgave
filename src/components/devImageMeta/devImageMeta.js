'use client'
import styles from './devImageMeta.module.css';
import { useState } from "react";
import { 
    FaChevronUp,
    FaChevronDown 
} from "react-icons/fa";
const DevImageMeta = ({content}) => {
    console.log(content)
    const [active, setActive] = useState(false);
   
    let icon = active ? <FaChevronUp  /> :  <FaChevronDown />;
    
  
    let style = active ? styles.active : '';
    const getSelectedInfo = (obj, n) => Object.fromEntries(Object.entries(obj || {}).slice(0, n));

    // Brug getSelectedInfo for at få de første 5 informationer
    const selectedImageInfo = getSelectedInfo(content.meta.image, 5);
    const selectedExifInfo = getSelectedInfo(content.meta.exif, 5);

    // Template (benytter style, icon og content variablerne).
    return <div className={`${styles.container} ${style}`}>
        <div className={styles.handle} onClick={() => setActive(!active)}>
            {icon} Print Meta
        </div>
        <div className={styles.content}>
                <h3>Image Info:</h3>
                <pre>{JSON.stringify(selectedImageInfo, null, 2)}</pre>
                <h3>Exif Info:</h3>
                <pre>{JSON.stringify(selectedExifInfo, null, 2)}</pre>
            </div>
    </div>
  
};
export default DevImageMeta