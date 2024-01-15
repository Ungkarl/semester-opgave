
import styles from './devAuthorHero.module.css';
const DevAuthorHero = ({author}) => {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <div className={styles.profile}><div>{author.author.split('')[0]}</div></div>
                    <div className={styles.text}>
                        <h2>{author.author}</h2>
                        <p>
                            {author.gallery}
                        </p>
                    </div>
                </div>
                
            </div>
            
        </>
    )
};
export default DevAuthorHero