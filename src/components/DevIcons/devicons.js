//use client, gør mit komponent klientbaseret
'use client'
//Importere alle mine ikoner
import { 
    Fa500Px, 
    FaAccessibleIcon,  
    FaBlackTie,
    FaBomb,
    FaBroom,
    FaCog,
    FaCoffee,
    FaGithub,
    FaJsSquare,
    FaBeer
} from "react-icons/fa";
//Importere mit actionbar komponent
import DevActionBar from '@/components/devActionbar/devActionbar';
//Stylesheet import
import styles from "./devicons.module.css"
//useState hook import
import { useState, useEffect } from "react";


//Definerer min funktion DevIcons
const DevIcons = () => {
    //Opretter mine state variabler til størrelse og farve
    const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const generateRandomHexColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    const [size, setSize] = useState(50);

    const [color, setColor] = useState("#000000")
    useEffect(() => {
        //Opdaterer klientside størrelser
        setColor(generateRandomHexColor)
        setSize(generateRandomNumber(50, 150));
      }, []); //Tomt afhængighedsarray, der sørger for den bare bliver kørt 1 gang når siden loades
    //Objekt, med styling til mine ikoner
    let style = { width: `${size}px`, height:`${size}px`, color:`${color}` }
    

    //Konfiguationsobjekt til mine størrelser
    let config = {
        small : 50,
        medium : 100,
        max : 150
    };
    //Mit renderet komponent
    return (
        <div className={styles.container}>
            <div className={styles.icons}>

                <Fa500Px style={style}/>
                <FaAccessibleIcon style={style}/>
                <FaBlackTie style={style}/>
                <FaBomb style={style}/>
                <FaBroom style={style} />
                <FaCog style={style}/>
                <FaCoffee style={style}/>
                <FaGithub  style={style}/>
                <FaJsSquare style={style} />
                <FaBeer style={style}/>

            </div>
             {/* Devactionbar, med tilhørende props */}
            <DevActionBar setSizeFunction={setSize} size={size} color={color} config={config} setColorFunction={setColor}></DevActionBar>


        </div>
    )
    

};
//Eksporterer
export default DevIcons;