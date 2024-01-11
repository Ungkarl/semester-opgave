import styles from './devGalleryHero.module.css';
const DevGalleryHero = ({gallery}) => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>{gallery.name}</h1>
                <p>{gallery.year}</p>
            </div>
        </div>
    )
};
export default DevGalleryHero