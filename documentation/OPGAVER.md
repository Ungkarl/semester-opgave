# MediaCollege Denmark

# Indledning.

Første opgave er at få et overblik over dette projekt og teste at alt er på plads.

Hvis du ikke allerede har, så læs **README.md** og sørg for at **alle punkter** er gennemført.

## Start Projektet og få overblik.

Start projektet og du skulle som udgangspukt se en boks på forsiden med Media College Logo.

Dette er en Media College Template og det kan sagtens være at du vil hente flere projekter/udgaver, hvor denne template er udgangspunktet.

Husk derfor **ALTID** at læse **README.md** og **OPGAVER.MD** inden du går igang.

### :dart: Opgave: Test data adgang.

Inden vi starter på at få overblik over projektet, så tester vi adgangen til data.i databasen.

Vi har allerede lavet meget af alt data behandlingen - så vi kan koncentrere os om at abejde med den data og hente den på forksellige måder.

Åbn filen ``boilerbox.js`` som indholder ``<BoilerBox></BoilerBox>`` komponentet.

Udkommentér linie `7` og `14`.

Se på forsiden og der skulle gerne være tilføjet en linie til boksen.

``Antal gallerier: 2``

Hvis du ser dette er **Alt godt** hvis du ikke ser dette undersøg om du har data i din MONGODB - `sem_galleries` og gennemfør *punkr 2* i `README.md` filen igen. 

**Tag fat i din And :duck: og derefter dine med-studerende :metal: og tilsidst din underviser** :muscle:

# Overblik opbygning.

Til at starte med er dette en template med det absolutte minimum installeret på forhånd. Vi anbefaler at du lige benytter lidt tid til at få et overblik.

Referencer: https://nextjs.org/docs/getting-started/project-structure
*(note: brug tid på at læse om strukturen og hvad de enekelte fil navngivninger betyder.)* 

**NextJS**: Handler om stuktur og applikations-framework         
**React**: Er for komponenterne.

### Mappe Strutur.

1. *app*

    Indeholder pt *alle* vores side-filer (page.js osv) og rute mapper (underside).

2. *components*

    Indeholder alle de komponenter vi benytter på vores sider.
    Lige nu indeholder den en boileplate komponent - boksen på forsiden.

3. *lib*

    Indeholder services, database filer osv - noget der har mere med udviklingen af gøre end selve side og ui-komponenter.

4. *utils* 

    Håndtering af fonte.

### Filer.

1. *page.js* 
    
   `page.js` i roden af app mappen, er vores forside. På denne side har vi indsat ét komponent.         
   https://nextjs.org/docs/app/api-reference/file-conventions/page

1. *page.module.css* 
    
   `page.module.css` Module stylesheet filen til vores page.js i roden.     
   https://nextjs.org/docs/app/building-your-application/styling/css-modules
   

1. *layout.js* 
    
   `layout.js` Dette er vores **rod** layout og skal være tilstede. Det er vores "globale" wrapper og det er her vi vil lave en navigation der skal gå på tværs af hele sitet.      
   https://nextjs.org/docs/app/api-reference/file-conventions/layout

   Rod-layout filen er den fil hvor *head* og *body* er defineret.

    ```html 
    <html lang="en">
        <body className={oswaldFont.className}>
        {children} <-- Her vil indholdet af alle sider osv bliver indsat.
        </body>
    </html>
    ```
    Det er også her, vi lige nu, fortæller hele dokumentet at vi benytter *Oswald* fonten.

   *(note: layout filer er meget brugbare i mange situationer - man kan have mange layout filer men kun én ROD layout fil)*

1. *not-found.js* 
    
   `not-found.js` i roden af app mappen, er den side der vil vises hvis vores "route" ikke finder en `page.js` på den url vi kalder.            
   https://nextjs.org/docs/app/api-reference/file-conventions/not-found

2. *global.css*

    `global.css` indholder den styling der gælder hele sitet.           
    https://nextjs.org/docs/app/building-your-application/styling/css-modules#global-styles

2. *fav.ico*

    `fav.ico`Det ikon vi ser på fanebladet i browseren.         
    https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#favicon

### Boilerplate Box

I `components/boilerplate`mappen ligger et ui-komponent, `boilerbox.js`. Dette komponent er indsat på forsiden vi fjerne den senere men benytter den lidt endnu.

### Data og Database.

Vi har allerede testet om der er hul til vores data. Og i dette projekt er det meste af data laget allerede lavet, det skal i ikke tænke på. Men lad os lige kigge på filen der har adgang til databasen.

Kig i mappen `lib`og åbn `data.service.js`.

Filen består af en række `asyncrone` - `async` funktioner som tilgår vores MONGO database. Lad os kigge på den metode vi benyttede i `boilerbox`. -> `await fetchGalleries()`

*et udsnit af filen*
```javascript
// ...
import dbConnect from "./db/dbConnect.mjs";
// ...
import galleryModel from "./db/models/gallery.model.mjs";

// ...
export const fetchGalleries = async () => { 
    
    console.log('fetchGalleryById')

    try {

        await dbConnect();
        return await galleryModel.find({});

    } catch (error) {

        console.log(error)

    }

};
```
Læg mærke til at vi *nøjagtig* lige som i vores node/crud projekt. 

Vi kalder en Mongoose **Model** (*galleryModel*) og benytter en en tom **Query** -> `{}` -> `galleryModel.find( {} )`.

Denne Query (forespørgsel) vil aflevere alle gallerier.

### :dart: Opgave: Se data

Indsæt en følgende `console.log` i linie `8` i `boilerbox.js`.

```javascript
console.log('Galleries', galleries)
```

:question: Hvad hedder de to gallerier der er i data grundlaget og hvor kan man man læse console loggen?.

Skriv svaret herunder: (åbn i vscode)
```
Galleri 1: 
Galleri 2:
console.log udskrives : (klient eller server).
```

Data kan hentes og håndteres på flere måder. Men overordnet set vil man i next tale om `serverside` eller `clientside`. Vi vil løbende komme ind på forskellene og dette dokument vil som sådan ikke gå i dybden - men vi vil forklare hvornår vi gør det ene og det andet.

Men tænk *serverside* som udgangspunkt når man arbejder med NextJS - Det er udgangspunktet. Hver gang man skriver `'use client'` i et komponent så er dette komponent `clientside` og resten er i princippet stadig `serverside`.

**Med det på plads! :muscle:** 

Så kan vi kigge på vores `boilerbox.js` komponent igen. Læg mærke til at vi **ikke**  har skrevet `use client`.
Dermed er kompoentet serverside og skrevet allerede inden vi besøger siden. *(i princippet - lige bortsetfra at vi skal lave ét besøg for at "bygge" det)* Og når en bruger efterspørger forsiden så ligge komponentet færdig lavet data´en er skrevet.

Heri ligger der selvfølgelig en forventing om at den data ikke ændre sig særlig tit - og derfor kan det lige så godt komme fra vores `cache`.

*(note: cache er den hukommelse, allerede hentet data, befinder sig i - browsere vil forsøge at benytte dette istedet for "hente igen")*.

### :dart: Opgave: BoilerBox 'use client'

Prøv at indsætte `'use client'` i toppen af `boilerbox.js`.

Nu kan du se at vi får en fejl fra systemet - Man kan *ikke* have en `async` client komponent og derfor kan vi ikke henter data som et server komponent.

Så enten er det et server komponent eller også er det et client komponent.

Lad os prøve at ændre det således at vores data stadig hentes `serverside` men vores `boilerbox` kan været et `client component`. Hvis vores brugere skal klikke på knapper osv - så skal, den del af, komponentet være `client side`. Ikke alle dele af komponentet men "de dele" der skal være *bruger interaktive*.

Åbn `page.js` vores forside som indeholder `<BoilerBox></BoilerBox>`.

Nu lader vi `page.js` hente data.

Åbn `page.js` og indsæt i linie `7` følgende:
```javascript
const galleries = await fetchGalleries();
```

Og husk at lave en reference/import til funktioenen i toppen af dokumentet.

```javascript
import { fetchGalleries } from '@/lib/data.service'
```

Nu tilføjer vi `galleries` data´en som en `property` på `<BoilerBox></BoilerBox>`

```javascript
<BoilerBox galleries={galleries}/>
```

Åbn `boilerbox.js` og fjern linie `7` -> `const galleries = await fetchGalleries();`

Fjern også `import` -> `import { fetchGalleries } from '@/lib/data.service';`

Tag imod `galleries` som en `property`.

```javascript
const BoilerBox = ({galleries}) => {
```

og skriv nu
```
`use client`
```

**Øverst i filen**

boilerbox.js ener med at se således ud.

```javascript
'use client'
import Image from 'next/image';
import styles from './boilerbox.module.css';

const BoilerBox = ({galleries}) => {

    console.log('galleries: ', galleries);
    return  <div className={styles.boilerbox}>
    <Image src={'/square_logo.png'} alt="MCDM Logo" width={232} height={195} />
    <div>
      <h1>React / NextJS</h1>
      <p>Medieskolerne Viborg</p>
      <p>Antal gallerier: {galleries.length}</p>
    </div>
  </div>

}

export default BoilerBox;
```

page.js ender med at se således ud.

```javascript
import BoilerBox from '@/components/boilerplate/boilerbox'
import styles from './page.module.css'
import { fetchGalleries } from '@/lib/data.service'

export default async function Page() {

  const galleries = await fetchGalleries();
  
  return (
    <main className={styles.page} >
      <BoilerBox galleries={galleries}/>
    </main>
  )
}
```

:question: Hvor udskriver `console.log`nu voers galleri data? 
Skriv svaret herunder: (åbn i vscode)

```
console.log udskrives : (klient eller server).
```

### Afslutning af 1. del.

Nu har vi været igennem første del af opgaverne.

Del må med denne opgave er:

* Vi lære hvordan vi får startet et Media College Projekt.
    * Mange projekter vil starte sådan.
    * En boilerplate er altid rar at have.
* Vi læser om NextJS fil og folder struktur.
* Vi lære overordnet om forskellen på `serverside`og `clientside` komponenter.

### Næste skridt.

De resterende opgaver er beskrevet i eksterne dokumenter.

Kontakt :muscle: din underviser.