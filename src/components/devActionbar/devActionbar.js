//Styles import
import styles from "./devActionbar.module.css"
//useEffect og useRef import
import { useEffect, useRef } from "react";

//Definerer min funktion, med modtagne props
const DevActionBar = ({setSizeFunction, size, config, setColorFunction }) => {

    //Opretter en ref til mit slider element
    const activeSlideRef = useRef(null);

    //useEffect hook, der opdaterer sliderens værdi, når størrelsen ændres
    useEffect(() => {

        let slider = activeSlideRef.current;
        slider.value = size;

    }, [size])

    //Renderet komponent
    return (
    <div className={styles.container}>
    <div className={styles.status}><h1>{size}</h1></div>
    <div className={styles.actionBar}>
    {/* Knapper til at ændre størrelsen baseret på konfigurationen */}
    <span className={styles.btn} onClick={() => setSizeFunction(config.small)}>LILLE</span>
    <span className={styles.btn} onClick={() => setSizeFunction(config.medium)}>MELLEM</span>
    <span className={styles.btn} onClick={() => setSizeFunction(config.max)}>STOR</span>
     {/* Slider til at justere størrelsen */}
    <span className={styles.btn}>
    <input ref={activeSlideRef} type="range" min="50" max="150" defaultValue={size} onChange={(e) => setSizeFunction(e.target.value)}></input>
    </span> 
    {/* Input til at vælge farve */}
    <span className={styles.btn} >
    <input type="color" className={styles.color} onChange={(e) => setColorFunction(e.target.value)}></input>
    </span>

        </div>
    </div>
       
    )
    

};
//Eksporterer
export default DevActionBar;