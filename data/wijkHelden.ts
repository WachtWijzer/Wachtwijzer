export interface LocalizedText {
  nl: string;
  en: string;
}

export interface WijkHeld {
  id: string;
  name: string; // Names stay the same
  age?: string;
  role: LocalizedText;
  location: LocalizedText;
  availability: LocalizedText;
  quote: LocalizedText;
  description: LocalizedText;
  contact: LocalizedText;
  photo?: string; // Path to photo/avatar
}

export const wijkHelden: WijkHeld[] = [
  {
    id: '1',
    name: 'Tim',
    role: {
      nl: 'Fietsenmaker & Vrijwilliger',
      en: 'Bicycle Mechanic & Volunteer'
    },
    location: {
      nl: 'Bibliotheek Hoogvliet',
      en: 'Hoogvliet Library'
    },
    availability: {
      nl: 'Vrijdag, 15:00 - 16:00',
      en: 'Friday, 15:00 - 16:00'
    },
    quote: {
      nl: 'Kapotte scooter of fiets? Ik help je graag om hem weer aan de praat te krijgen!',
      en: 'Broken scooter or bicycle? I\'m happy to help you get it running again!'
    },
    description: {
      nl: 'Tim is een fietsenmaker en vrijwilliger die jongeren helpt met het gratis repareren van scooters en fietsen. Hij heeft veel ervaring en deelt zijn kennis graag. Alle hulp is laagdrempelig en zonder kosten.',
      en: 'Tim is a bicycle mechanic and volunteer who helps young people with the free repair of scooters and bicycles. He has a lot of experience and is happy to share his knowledge. All help is low-threshold and free of charge.'
    },
    contact: {
      nl: 'Spreek hem aan bij de Bibliotheek Hoogvliet op vrijdagmiddag tussen 15:00 en 16:00, of vraag bij de balie naar Tim.',
      en: 'Approach him at the Hoogvliet Library on Friday afternoon between 15:00 and 16:00, or ask for Tim at the desk.'
    },
    photo: 'figma:asset/2739c1c6d429fc36addaf7449f06ae75e7e73228.png'
  },
  {
    id: '2',
    name: 'Thijs',
    role: {
      nl: 'Huiswerkbegeleider',
      en: 'Homework Tutor'
    },
    location: {
      nl: 'Bibliotheek Hoogvliet',
      en: 'Hoogvliet Library'
    },
    availability: {
      nl: 'Maandag t/m woensdag, 16:00 - 17:00',
      en: 'Monday to Wednesday, 16:00 - 17:00'
    },
    quote: {
      nl: 'Huiswerk lastig? Samen krijgen we het voor elkaar!',
      en: 'Homework difficult? Together we\'ll get it done!'
    },
    description: {
      nl: 'Thijs helpt jongeren van alle niveaus met hun huiswerk. Of je nu vast zit bij een vak of gewoon wat extra uitleg nodig hebt, Thijs neemt de tijd voor je en helpt je verder.',
      en: 'Thijs helps young people of all levels with their homework. Whether you\'re stuck on a subject or just need some extra explanation, Thijs takes the time for you and helps you out.'
    },
    contact: {
      nl: 'Kom langs bij de Bibliotheek Hoogvliet tussen 16:00 en 17:00 uur (maandag t/m woensdag).',
      en: 'Visit the Hoogvliet Library between 16:00 and 17:00 (Monday to Wednesday).'
    },
    photo: 'figma:asset/c26d2edaecdf53bf5fb17ec812abf1780a13aff6.png'
  },
  {
    id: '3',
    name: 'Mirjam',
    role: {
      nl: 'Gepensioneerd Psycholoog',
      en: 'Retired Psychologist'
    },
    location: {
      nl: 'Huis van de Wijk Zevensprong',
      en: 'Zevensprong Community Center'
    },
    availability: {
      nl: 'Maandag t/m vrijdag, 10:00 - 11:00',
      en: 'Monday to Friday, 10:00 - 11:00'
    },
    quote: {
      nl: 'Soms helpt het gewoon om even te praten. Ik ben er voor jou.',
      en: 'Sometimes it just helps to talk. I\'m here for you.'
    },
    description: {
      nl: 'Mirjam is een gepensioneerde psycholoog en vrijwilliger die graag een luisterend oor biedt aan jongeren en ouders. In een rustige, vertrouwde omgeving kun je bij haar terecht voor een gesprek. Ze luistert, denkt mee en geeft informele steun.',
      en: 'Mirjam is a retired psychologist and volunteer who is happy to offer a listening ear to young people and parents. In a quiet, trusted environment, you can come to her for a conversation. She listens, thinks along, and provides informal support.'
    },
    contact: {
      nl: 'Meld je bij binnenkomst in Huis van de Wijk Zevensprong, tussen 10:00 en 11:00 uur (tijdens de koffie-ochtend).',
      en: 'Register upon arrival at the Zevensprong Community Center, between 10:00 and 11:00 (during the coffee morning).'
    },
    photo: 'figma:asset/bf9c9589720ccbec4f48a59004191a07ad8465dd.png'
  },
  {
    id: '4',
    name: 'John',
    role: {
      nl: 'Ex-militair & Jongerenmentor',
      en: 'Former Military & Youth Mentor'
    },
    location: {
      nl: 'Hoogvliet (in de wijk of Huis van de Wijk)',
      en: 'Hoogvliet (in the neighborhood or Community Center)'
    },
    availability: {
      nl: 'Wisselend - zichtbaar in de wijk',
      en: 'Variable - visible in the neighborhood'
    },
    quote: {
      nl: 'Voor jongeren die wat extra begeleiding kunnen gebruiken, ben ik er!',
      en: 'For young people who need extra guidance, I\'m here!'
    },
    description: {
      nl: 'John, ex-militair en liefkozend "de burgemeester van Hoogvliet" genoemd, begeleidt jongeren met activiteiten en geeft advies. Hij gaat in gesprek met jongens die dreigen af te glijden en organiseert jongensactiviteiten. Hij is er vooral voor jongeren die wat stevigere begeleiding kunnen gebruiken.',
      en: 'John, a former military person affectionately called "the mayor of Hoogvliet," accompanies young people with activities and gives advice. He talks to boys who are at risk of falling through the cracks and organizes boys\' activities. He is especially for young people who need stronger guidance.'
    },
    contact: {
      nl: 'Spreek John aan in de wijk of kom langs bij koffiemomenten in Huis van de Wijk.',
      en: 'Approach John in the neighborhood or visit during coffee moments at the Community Center.'
    },
    photo: 'figma:asset/24dbfeac7dc9891270f8f77f6fa264af19781fcc.png'
  }
];
