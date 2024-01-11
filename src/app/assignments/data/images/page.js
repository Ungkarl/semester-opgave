import { fetchImagesForGallery } from '@/lib/data.service';
import styles from './page.module.css'
import DevGalleryImage from '@/components/devGalleryImage/devGalleryImage';
import DevDebugJson from '@/components/devDebugJson/devDebugJson';
import DevImageMeta from '@/components/devImageMeta/devImageMeta';


const Page = async () => {

    let gallery = 'umbra';
    const images = await fetchImagesForGallery(gallery);

    return (
        <main className={styles.page}>
            <h1>Alle Billeder Fra {gallery} Data</h1>
            <DevDebugJson content={images}></DevDebugJson>

            <h1>Hvert Enkelt Billede</h1>
            {images.map((image, index) => {
                return <DevGalleryImage key={index} image={image}></DevGalleryImage>
            })}
        </main>
    );

}

export default Page