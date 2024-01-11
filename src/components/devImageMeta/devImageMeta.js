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
    const getSelectedInfo = (obj, n) => {
        // Det jeg modtager, bliver enten til obj eller {}, hvis der intet modtages
        const entriesArray = Object.entries(obj || {});
       
        
        // Vælger kun et hvis antal, fra mit nye array af entries
        const slicedEntries = entriesArray.slice(0, n);
    
        //Den information, som skal bruges, laves om til et objekt.
        const selectedInfo = Object.fromEntries(slicedEntries);
        //Returnere
        return selectedInfo; 
    };
    

    //Kalder min getSelectedInfo funktion, med content(billede & meta), her sender jeg så kun .meta.image/exif med, og får de første 5 entries.
    const selectedImageInfo = getSelectedInfo(content.meta.image, 5);
    const selectedExifInfo = getSelectedInfo(content.meta.exif, 5);

    //Container, til accordions  
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