// About page strings. Multi-paragraph; using 'string[]' for paragraphs to
// keep templates clean. Inline <em> for opera titles is allowed via
// set:html. Composer + work names stay original-language.
import type { Locale } from './index';

interface AboutStrings {
  eyebrow: string;
  heading: string;
  lede: string;
  paragraphs: string[];
  pullQuote: string;
  awardsHeading: string;
  awards: { year: string; name: string }[];
  languagesHeading: string;
  languagesBody: string;
  pressHeading: string;
  pressBody: string;
  portraitCaption: string;
}

export const ABOUT: Record<Locale, AboutStrings> = {
  en: {
    eyebrow: 'Soprano · Bilingual · Puerto Rican',
    heading: 'About',
    lede: 'Gabriela Stoloff-Báez is a Puerto Rican soprano whose performances span opera, oratorio, and contemporary work — from Mozart and Handel to world premieres of Laura Karpman and Jodi Goble.',
    paragraphs: [
      'She holds a Bachelor of Music in Voice Performance &amp; Musicology from the Oberlin Conservatory of Music and a Master of Music in Voice Performance from the San Francisco Conservatory of Music. She trained as a Gerdine Young Artist at Opera Theatre of Saint Louis in 2023 and 2024 and at the Chautauqua Opera Company and Conservatory in 2020, 2022, and 2023.',
      'Recent and upcoming engagements include performances with Opera Parallèle (<em>Harvey Milk Reimagined</em>, <em>Balls</em>), Opera Theatre of Saint Louis (<em>The Pirates of Penzance</em>, <em>Galileo Galilei</em>, <em>Susannah</em>, <em>The Barber of Seville</em>), Savannah Voice Festival (<em>Rigoletto</em>, <em>The Eleanors</em>), Seraphic Fire, and the Chautauqua Opera Company. In summer 2026 she joins Des Moines Metro Opera as an Apprentice Artist.',
      'Gaby recently transitioned voice types from mezzo-soprano to soprano. Her current audition repertoire centers on Marguerite (<em>Faust</em>), Mimì (<em>La bohème</em>), Agathe (<em>Der Freischütz</em>), and the title role in Floyd\'s <em>Susannah</em>.',
    ],
    pullQuote:
      'Repertoire that celebrates diversity, multiplicity, social justice, and humanity.',
    awardsHeading: 'Awards',
    awards: [
      { year: '2024', name: 'Elihu Hyndman Memorial Award — Opera Theatre of Saint Louis' },
      { year: '2023', name: 'Laffont Competition — Oregon District Winner &amp; Northwest Region Award Recipient' },
      { year: '2021', name: 'Joan &amp; David Traitel Vocal Scholarship — San Francisco Conservatory' },
      { year: '2021', name: 'Dix &amp; Didi Boring Endowed Scholarship for Voice — San Francisco Conservatory' },
      { year: '2020', name: 'Margot Bos Stambler \'84 Professional Development Award — Oberlin Conservatory' },
    ],
    languagesHeading: 'Languages & Skills',
    languagesBody:
      'Bilingual <span lang="es">español / English</span>. Fluent Italian. German and French language studies. Theatrical and stage combat training; dance training; music theory. Experienced choral instructor, private voice teacher, and early-childhood music and Spanish educator.',
    pressHeading: 'Press & Bookings',
    pressBody:
      'For management inquiries, press requests, and a downloadable EPK, <a href="/contact/">please get in touch</a>.',
    portraitCaption: '2024.',
  },

  es: {
    eyebrow: 'Soprano · Bilingüe · Puertorriqueña',
    heading: 'Bio',
    lede: 'Gabriela Stoloff-Báez es una soprano puertorriqueña cuyas actuaciones abarcan la ópera, el oratorio y la obra contemporánea — desde Mozart y Händel hasta los estrenos mundiales de Laura Karpman y Jodi Goble.',
    paragraphs: [
      'Es Bachelor of Music en Interpretación Vocal &amp; Musicología por el Oberlin Conservatory of Music y Master of Music en Interpretación Vocal por el San Francisco Conservatory of Music. Fue Gerdine Young Artist en Opera Theatre of Saint Louis en 2023 y 2024, y completó el programa de formación de Chautauqua Opera Company and Conservatory en 2020, 2022 y 2023.',
      'Sus compromisos recientes y próximos incluyen actuaciones con Opera Parallèle (<em>Harvey Milk Reimagined</em>, <em>Balls</em>), Opera Theatre of Saint Louis (<em>The Pirates of Penzance</em>, <em>Galileo Galilei</em>, <em>Susannah</em>, <em>The Barber of Seville</em>), Savannah Voice Festival (<em>Rigoletto</em>, <em>The Eleanors</em>), Seraphic Fire y Chautauqua Opera Company. En el verano de 2026 se integra a Des Moines Metro Opera como Apprentice Artist.',
      'Gaby ha realizado recientemente la transición de mezzosoprano a soprano. Su repertorio actual de audición se centra en Marguerite (<em>Faust</em>), Mimì (<em>La bohème</em>), Agathe (<em>Der Freischütz</em>) y el papel principal de la <em>Susannah</em> de Floyd.',
    ],
    pullQuote:
      'Un repertorio que celebra la diversidad, la multiplicidad, la justicia social y la humanidad.',
    awardsHeading: 'Premios',
    awards: [
      { year: '2024', name: 'Elihu Hyndman Memorial Award — Opera Theatre of Saint Louis' },
      { year: '2023', name: 'Laffont Competition — Ganadora del Distrito de Oregón y Premio Regional Northwest' },
      { year: '2021', name: 'Beca Joan &amp; David Traitel para Voz — San Francisco Conservatory' },
      { year: '2021', name: 'Beca Dix &amp; Didi Boring para Voz — San Francisco Conservatory' },
      { year: '2020', name: 'Premio Margot Bos Stambler \'84 de Desarrollo Profesional — Oberlin Conservatory' },
    ],
    languagesHeading: 'Idiomas y formación',
    languagesBody:
      'Bilingüe español / English. Italiano fluido. Estudios de alemán y francés. Formación teatral y de combate escénico; danza; teoría musical. Experiencia como instructora coral, profesora particular de canto y educadora musical y de español para la primera infancia.',
    pressHeading: 'Prensa y Contrataciones',
    pressBody:
      'Para consultas de management, solicitudes de prensa y descargar el EPK, <a href="/contact/">por favor escríbeme</a>.',
    portraitCaption: '2024.',
  },

  it: {
    eyebrow: 'Soprano · Bilingue · Portoricano',
    heading: 'Bio',
    lede: 'Gabriela Stoloff-Báez è un soprano portoricano le cui esibizioni spaziano dall’opera all’oratorio e al repertorio contemporaneo — da Mozart e Händel alle prime mondiali di Laura Karpman e Jodi Goble.',
    paragraphs: [
      'Ha conseguito il Bachelor of Music in Canto e Musicologia presso l’Oberlin Conservatory of Music e il Master of Music in Canto presso il San Francisco Conservatory of Music. È stata Gerdine Young Artist all’Opera Theatre of Saint Louis nel 2023 e nel 2024 e ha completato il programma di formazione della Chautauqua Opera Company and Conservatory nel 2020, 2022 e 2023.',
      'Tra i suoi impegni recenti e futuri figurano produzioni con Opera Parallèle (<em>Harvey Milk Reimagined</em>, <em>Balls</em>), Opera Theatre of Saint Louis (<em>The Pirates of Penzance</em>, <em>Galileo Galilei</em>, <em>Susannah</em>, <em>The Barber of Seville</em>), Savannah Voice Festival (<em>Rigoletto</em>, <em>The Eleanors</em>), Seraphic Fire e Chautauqua Opera Company. Nell’estate del 2026 entrerà a far parte di Des Moines Metro Opera come Apprentice Artist.',
      'Gaby ha recentemente effettuato la transizione vocale da mezzosoprano a soprano. Il suo repertorio attuale per le audizioni si concentra su Marguerite (<em>Faust</em>), Mimì (<em>La bohème</em>), Agathe (<em>Der Freischütz</em>) e il ruolo del titolo nella <em>Susannah</em> di Floyd.',
    ],
    pullQuote:
      'Un repertorio che celebra la diversità, la molteplicità, la giustizia sociale e l’umanità.',
    awardsHeading: 'Riconoscimenti',
    awards: [
      { year: '2024', name: 'Elihu Hyndman Memorial Award — Opera Theatre of Saint Louis' },
      { year: '2023', name: 'Laffont Competition — Vincitrice del Distretto dell’Oregon e Premio Regionale Northwest' },
      { year: '2021', name: 'Borsa di studio Joan &amp; David Traitel per il Canto — San Francisco Conservatory' },
      { year: '2021', name: 'Borsa di studio Dix &amp; Didi Boring per il Canto — San Francisco Conservatory' },
      { year: '2020', name: 'Margot Bos Stambler \'84 Professional Development Award — Oberlin Conservatory' },
    ],
    languagesHeading: 'Lingue e Competenze',
    languagesBody:
      'Bilingue spagnolo / inglese. Italiano fluente. Studi di tedesco e francese. Formazione teatrale e di combattimento scenico; danza; teoria musicale. Esperienza come istruttrice corale, insegnante privata di canto ed educatrice musicale e di spagnolo per l’infanzia.',
    pressHeading: 'Stampa e Prenotazioni',
    pressBody:
      'Per richieste di management, contatti stampa e per scaricare l’EPK, <a href="/contact/">scrivimi</a>.',
    portraitCaption: '2024.',
  },
};

export const ABOUT_META: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'About — Gabriela Stoloff-Báez',
    description:
      'Biography of soprano Gabriela Stoloff-Báez: Oberlin Conservatory and San Francisco Conservatory training, performances with Opera Parallèle, Opera Theatre of St. Louis, Seraphic Fire, Chautauqua, and Savannah Voice Festival.',
  },
  es: {
    title: 'Bio — Gabriela Stoloff-Báez',
    description:
      'Biografía de la soprano Gabriela Stoloff-Báez: formación en Oberlin Conservatory y San Francisco Conservatory; actuaciones con Opera Parallèle, Opera Theatre of St. Louis, Seraphic Fire, Chautauqua y Savannah Voice Festival.',
  },
  it: {
    title: 'Bio — Gabriela Stoloff-Báez',
    description:
      'Biografia del soprano Gabriela Stoloff-Báez: formazione presso Oberlin Conservatory e San Francisco Conservatory; esibizioni con Opera Parallèle, Opera Theatre of St. Louis, Seraphic Fire, Chautauqua e Savannah Voice Festival.',
  },
};
