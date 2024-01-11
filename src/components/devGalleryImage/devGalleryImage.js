import Image from 'next/image';
import DevDebugJson from '../devDebugJson/devDebugJson';
import styles from './devGalleryImage.module.css';
import DevImageMeta from '../devImageMeta/devImageMeta';
const DevGalleryImage = ({image}) => {
    return (
        <>
            <Image src={image.path} alt={`Portfolio billede taget af ${image.author} udstillet i halleriet ${image.gallery}`} className={styles.image} width={image.width} height={image.height} />

            <DevImageMeta content={image}></DevImageMeta>
            <DevDebugJson content={image}></DevDebugJson>
        </>
    )
};
export default DevGalleryImage
