import { fetchGalleries } from '@/lib/data.service';
import styles from './page.module.css'
import DevDebugJson from '@/components/devDebugJson/devDebugJson';
import DevGalleryHero from '@/components/devGalleryHero/devGalleryHero';

const Page = async () => {

    const galleries = await fetchGalleries();
    
    return (
        <main className={styles.page}>
        
            <h1>Alt Galleri Data</h1>
            <DevDebugJson content={galleries} />
            
            <h1>Hvert Enkelt Galleri</h1>
            {galleries.map((gallery, index) => {
            return <DevGalleryHero key={index} gallery={gallery} />

            
})}
        
        </main>
        );

}

export default Page