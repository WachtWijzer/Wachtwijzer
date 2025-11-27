import type { Category } from '../App';

// Logo imports
import dockLogo from 'figma:asset/0d516d71417a92570782df3e9cdf16b10ea20b7c.png';
import huisVanDeWijkLogo from 'figma:asset/8ba654808226959d07079bbd8b1f8c572442687c.png';
import ikBenWijLogo from 'figma:asset/cf0658b94fa5b20a5313ac1c2d12d3d5ca799ac9.png';
import jdmLogo from 'figma:asset/73f5176832cd475b06f9ec295164da3ff913be4f.png';
import mieroLogo from 'figma:asset/d72855961d2664922f724588bc99e065ec161f00.png';
import superFamilyLogo from 'figma:asset/8ae0bd6669bb3b4903a4d00c8ee0e27728f27672.png';

export interface LocalizedText {
  nl: string;
  en: string;
}

export interface Activity {
  id: string;
  title: LocalizedText;
  location: LocalizedText;
  description: LocalizedText;
  categories: Category[];
  days?: LocalizedText;
  address?: string; // Address stays the same
  quote?: {
    text: LocalizedText;
    author: string; // Names stay the same
  };
  detailedInfo?: LocalizedText;
  requirements?: LocalizedText;
  phone?: string;
  email?: string;
  website?: string;
  ageRange?: LocalizedText;
  iconName?: string;
  logo?: string;
  organizationName?: LocalizedText;
}

export const activities: Activity[] = [
  {
    id: '1',
    title: {
      nl: 'Stiltecafé met Mirjam',
      en: 'Quiet café with Mirjam'
    },
    organizationName: {
      nl: 'Huis van de Wijk Zevensprong',
      en: 'Zevensprong Community Center'
    },
    location: {
      nl: 'Hoogvliet',
      en: 'Hoogvliet'
    },
    description: {
      nl: 'Luisterend oor, koffie en laagdrempelig contact. Mirjam is een gepensioneerde psycholoog en neemt graag de tijd voor je.',
      en: 'Listening ear, coffee, and low-threshold contact. Mirjam is a retired psychologist and is happy to take the time for you.'
    },
    categories: ['praten', 'rust'],
    days: {
      nl: 'Maandag t/m vrijdag, 10:00 - 11:00',
      en: 'Monday to Friday, 10:00 - 11:00'
    },
    address: 'Zevensprong, Hoogvliet Rotterdam',
    logo: huisVanDeWijkLogo,
    quote: {
      text: {
        nl: 'Soms heb je gewoon iemand nodig die echt naar je luistert, zonder oordeel.',
        en: 'Sometimes you just need someone who really listens to you, without judgment.'
      },
      author: 'Een bezoeker'
    },
    detailedInfo: {
      nl: 'Mirjam is een gepensioneerde psycholoog die graag beschikbaar is voor jongeren en ouders die even willen praten. In een rustige setting met een kopje koffie kun je je verhaal kwijt. Ze luistert, denkt mee en geeft informele steun.',
      en: 'Mirjam is a retired psychologist who is happy to be available for young people and parents who want to chat. In a quiet setting with a cup of coffee, you can share your story. She listens, thinks along, and provides informal support.'
    },
    requirements: {
      nl: 'Meld je bij binnenkomst, verder niks nodig',
      en: 'Register upon arrival, no other requirements'
    },
    ageRange: {
      nl: '10-23 jaar (en ouders)',
      en: '10-23 years (and parents)'
    },
    iconName: 'Coffee'
  },
  {
    id: '2',
    title: {
      nl: 'Dock Hoogvliet',
      en: 'Dock Hoogvliet'
    },
    organizationName: {
      nl: 'Dock',
      en: 'Dock'
    },
    location: {
      nl: 'Hoogvliet',
      en: 'Hoogvliet'
    },
    description: {
      nl: 'Coaching, groepsactiviteiten en welzijnswerk. Het Huis van de Wijk is een centrale plek voor ontmoeting, koffie-ochtenden en sociale activiteiten. Dock helpt je om je eigen kracht te ontdekken.',
      en: 'Coaching, group activities, and well-being work. The Community Center is a central place for meetings, coffee mornings, and social activities. Dock helps you discover your own strength.'
    },
    categories: ['rust', 'praten'],
    days: {
      nl: 'Zie website voor actuele activiteiten en openingstijden',
      en: 'See website for current activities and opening hours'
    },
    address: 'Mosoelstraat 20, Hoogvliet Rotterdam',
    logo: dockLogo,
    detailedInfo: {
      nl: 'Dock beheert het Huis van de Wijk waar koffie-ochtenden worden gehouden en sociale activiteiten georganiseerd. Er is ruimte voor laagdrempelig contact met de buurt en vrijwilligers zoals Mirjam en John. Dock richt zich op het versterken van je eigen kracht en biedt individuele coaching en groepsactiviteiten.',
      en: 'Dock manages the Community Center where coffee mornings are held and social activities are organized. There is space for low-threshold contact with the neighborhood and volunteers like Mirjam and John. Dock focuses on strengthening your own strength and offers individual coaching and group activities.'
    },
    requirements: {
      nl: 'Je kunt binnenlopen of een afspraak maken via de website',
      en: 'You can walk in or make an appointment via the website'
    },
    website: 'https://www.dock.nl',
    ageRange: {
      nl: 'Alle leeftijden',
      en: 'All ages'
    },
    iconName: 'HomeIcon'
  },
  {
    id: '3',
    title: {
      nl: 'Scooters & Fietsen maken met Tim',
      en: 'Fixing Scooters & Bicycles with Tim'
    },
    organizationName: {
      nl: 'Bibliotheek Hoogvliet',
      en: 'Hoogvliet Library'
    },
    location: {
      nl: 'Hoogvliet',
      en: 'Hoogvliet'
    },
    description: {
      nl: 'Repareer je scooter of fiets met hulp van Tim. Praktisch werken, iets leren en aan het eind heb je weer een werkende scooter of fiets!',
      en: 'Fix your scooter or bicycle with help from Tim. Practical work, learning something, and at the end, you have a working scooter or bicycle again!'
    },
    categories: ['actief', 'creatief'],
    days: {
      nl: 'Vrijdag, 15:00 - 16:00',
      en: 'Friday, 15:00 - 16:00'
    },
    address: 'Bibliotheek Hoogvliet, Rotterdam',
    quote: {
      text: {
        nl: 'Tim helpt me altijd verder, en het is gratis. Super chill!',
        en: 'Tim always helps me further, and it\'s free. Super chill!'
      },
      author: 'Jongere uit de wijk'
    },
    detailedInfo: {
      nl: 'Tim is een fietsenmaker en vrijwilliger die elke vrijdagmiddag aanwezig is bij de bibliotheek om jongeren te helpen met het gratis repareren van fietsen en scooters. Hij heeft veel ervaring en deelt zijn kennis graag.',
      en: 'Tim is a bicycle mechanic and volunteer who is present every Friday afternoon at the library to help young people with the free repair of bicycles and scooters. He has a lot of experience and is happy to share his knowledge.'
    },
    requirements: {
      nl: 'Neem je scooter of fiets mee, de rest regelt Tim',
      en: 'Bring your scooter or bicycle, the rest is handled by Tim'
    },
    ageRange: {
      nl: '10-23 jaar',
      en: '10-23 years'
    },
    iconName: 'Wrench'
  },
  {
    id: '4',
    title: {
      nl: 'Rotterdam Jaguars Lacrosse',
      en: 'Rotterdam Jaguars Lacrosse'
    },
    organizationName: {
      nl: 'Rotterdam Jaguars',
      en: 'Rotterdam Jaguars'
    },
    location: {
      nl: 'Rotterdam',
      en: 'Rotterdam'
    },
    description: {
      nl: 'Wil je een gave teamsport proberen? Lacrosse combineert snelheid, techniek en teamwork. De Rotterdam Jaguars verwelkomen nieuwe spelers!',
      en: 'Want to try a cool team sport? Lacrosse combines speed, technique, and teamwork. The Rotterdam Jaguars welcome new players!'
    },
    categories: ['actief'],
    days: {
      nl: 'Zie website voor trainingstijden',
      en: 'See website for training times'
    },
    detailedInfo: {
      nl: 'Lacrosse is een dynamische teamsport die steeds populairder wordt. Bij de Rotterdam Jaguars kun je kennismaken met de sport en meetrainen. Contactpersoon Thomas Haitsma helpt je graag op weg.',
      en: 'Lacrosse is a dynamic team sport that is becoming increasingly popular. At the Rotterdam Jaguars, you can get to know the sport and train together. Contact person Thomas Haitsma is happy to help you get started.'
    },
    requirements: {
      nl: 'Sportkleding en sportschoenen, verdere materialen worden verstrekt',
      en: 'Sportswear and sports shoes, additional materials are provided'
    },
    website: 'https://www.rotterdamjaguars.nl',
    ageRange: {
      nl: '10-23 jaar',
      en: '10-23 years'
    },
    iconName: 'Dumbbell'
  },
  {
    id: '5',
    title: {
      nl: 'Jazzdansstudio Marleen',
      en: 'Jazz Dance Studio Marleen'
    },
    organizationName: {
      nl: 'Jazzdansstudio Marleen',
      en: 'Jazz Dance Studio Marleen'
    },
    location: {
      nl: 'Hoogvliet',
      en: 'Hoogvliet'
    },
    description: {
      nl: 'Dans, fitness en expressie voor jong en oud. Of je nu ervaring hebt of niet, bij Marleen kun je jezelf uiten door beweging.',
      en: 'Dance, fitness, and expression for young and old. Whether you have experience or not, with Marleen you can express yourself through movement.'
    },
    categories: ['creatief', 'actief'],
    address: 'Max Havelaarweg 40, Hoogvliet Rotterdam',
    logo: jdmLogo,
    detailedInfo: {
      nl: 'Jazzdansstudio Marleen biedt verschillende danslessen aan waar je jezelf kunt uiten en bewegen op muziek. Perfect voor als je van dans houdt of iets nieuws wilt proberen.',
      en: 'Jazz Dance Studio Marleen offers various dance lessons where you can express yourself and move to music. Perfect if you love dancing or want to try something new.'
    },
    requirements: {
      nl: 'Sportkleding en een positieve instelling',
      en: 'Sportswear and a positive attitude'
    },
    website: 'https://www.jazzdansstudiomarleen.nl',
    ageRange: {
      nl: 'Alle leeftijden',
      en: 'All ages'
    },
    iconName: 'Music'
  },
  {
    id: '6',
    title: {
      nl: 'Ik Ben WIJ',
      en: 'Ik Ben WIJ'
    },
    organizationName: {
      nl: 'Ik Ben WIJ',
      en: 'Ik Ben WIJ'
    },
    location: {
      nl: 'Rotterdam',
      en: 'Rotterdam'
    },
    description: {
      nl: '📍 Jongerenorganisatie in de wijk. Een plek waar jongeren hun verhaal kunnen delen en zichzelf kunnen laten zien via podcasts, film, kunst of gewoon in gesprek. Hier draait het om jongeren zelf aan het woord laten. Jij bepaalt hoe je meedoet.',
      en: '📍 Youth organization in the neighborhood. A place where young people can share their story and show themselves through podcasts, film, art, or just in conversation. It\'s all about letting young people have their say. You decide how to participate.'
    },
    categories: ['creatief', 'praten', 'actief'],
    logo: ikBenWijLogo,
    detailedInfo: {
      nl: 'Ik Ben WIJ is een creatieve community voor jongeren in Rotterdam. Iedereen tussen 12 en 23 jaar is welkom of je nu uit Hoogvliet komt of een andere wijk. Jongeren krijgen hier de ruimte om hun verhaal te vertellen via eigentijdse media zoals podcasts, film, kunst of muziek. Je werkt samen aan projecten en wordt begeleid door mensen die echt snappen hoe het is om jong te zijn in de stad.',
      en: 'Ik Ben WIJ is a creative community for young people in Rotterdam. Everyone between 12 and 23 years old is welcome, whether you come from Hoogvliet or another neighborhood. Young people get the space here to tell their story through modern media such as podcasts, film, art, or music. You work on projects together and are guided by people who really understand what it\'s like to be young in the city.'
    },
    requirements: {
      nl: '📌 Jezelf. En een beetje nieuwsgierigheid.\nCreativiteit, betrokkenheid en zin om iets van jezelf te laten horen.',
      en: '📌 Yourself. And a bit of curiosity.\nCreativity, engagement, and a desire to share something about yourself.'
    },
    ageRange: {
      nl: '12-23 jaar',
      en: '12-23 years'
    },
    iconName: 'Mic'
  },
  {
    id: '7',
    title: {
      nl: 'MIERO Jongerenwerk',
      en: 'MIERO Youth Work'
    },
    organizationName: {
      nl: 'MIERO',
      en: 'MIERO'
    },
    location: {
      nl: 'Rotterdam',
      en: 'Rotterdam'
    },
    description: {
      nl: 'Laagdrempelige, directe ondersteuning aan jongeren. Activiteiten gericht op vertrouwen, expressie en contact. Sluit aan bij interesses zoals sport en muziek. Perfect voor jongeren in de wachttijd - snel opvang zonder bureaucratie.',
      en: 'Low-threshold, direct support for young people. Activities focused on trust, expression, and contact. Connect with interests like sports and music. Perfect for young people in waiting time - quick intake without bureaucracy.'
    },
    categories: ['praten', 'actief', 'creatief'],
    detailedInfo: {
      nl: 'Opgericht door William Miero, biedt MIERO Jongerenwerk directe, laagdrempelige ondersteuning aan jongeren. Ze werken outreachend met een actieve straataanpak en richten zich op preventie en talentontwikkeling. De organisatie kan jongeren snel opvangen zonder bureaucratie en sluit perfect aan bij jongeren die in de wachttijd zitten.',
      en: 'Founded by William Miero, MIERO Youth Work offers direct, low-threshold support to young people. They work outreach with an active street approach and focus on prevention and talent development. The organization can quickly intake young people without bureaucracy and perfectly connects with young people in waiting time.'
    },
    requirements: {
      nl: 'Geen, je kunt ze in de wijk tegenkomen of via de website contact opnemen',
      en: 'None, you can encounter them in the neighborhood or contact them via the website'
    },
    website: 'https://www.williammiero.com',
    ageRange: {
      nl: '10-23 jaar',
      en: '10-23 years'
    },
    iconName: 'Users',
    logo: mieroLogo
  },
  {
    id: '8',
    title: {
      nl: 'Super Family',
      en: 'Super Family'
    },
    organizationName: {
      nl: 'Super Family',
      en: 'Super Family'
    },
    location: {
      nl: 'Rotterdam',
      en: 'Rotterdam'
    },
    description: {
      nl: 'Ondersteuningsnetwerk voor gezinnen. Biedt steun, empowermentprogramma\'s en betrokkenheid vanuit ervaringsdeskundigheid. Betrekt ouders actief bij de wachttijd en versterkt het netwerk rond jongeren.',
      en: 'Support network for families. Offers support, empowerment programs, and involvement from experience. Engages parents actively in waiting time and strengthens the network around young people.'
    },
    categories: ['praten', 'rust'],
    detailedInfo: {
      nl: 'Onder leiding van directeur Kitty Loduvica biedt Super Family steun aan gezinnen en empowermentprogramma\'s. De organisatie werkt vanuit ervaringsdeskundigheid en betrekt ouders actief bij de ondersteuning van hun kinderen, vooral tijdens wachttijden voor jeugdhulp. Ze richten zich op het versterken van het netwerk rond jongeren.',
      en: 'Led by director Kitty Loduvica, Super Family offers support to families and empowerment programs. The organization works from experience and actively involves parents in the support of their children, especially during waiting times for youth care. They focus on strengthening the network around young people.'
    },
    requirements: {
      nl: 'Contact opnemen voor meer informatie',
      en: 'Contact for more information'
    },
    ageRange: {
      nl: 'Gezinnen met kinderen 0-23 jaar',
      en: 'Families with children 0-23 years'
    },
    iconName: 'Heart',
    logo: superFamilyLogo
  },
  {
    id: '9',
    title: {
      nl: 'John - "De burgemeester van Hoogvliet"',
      en: 'John - "The Mayor of Hoogvliet"'
    },
    organizationName: {
      nl: 'Huis van de Wijk',
      en: 'Community Center'
    },
    location: {
      nl: 'Hoogvliet',
      en: 'Hoogvliet'
    },
    description: {
      nl: 'John, ex-militair en bekend in de wijk, begeleidt jongeren met jongensactiviteiten. Hij is er vooral voor jongeren die wat extra begeleiding kunnen gebruiken. Gaat in gesprek met jongens die dreigen afte glijden.',
      en: 'John, a former military person and well-known in the neighborhood, accompanies young people with boys\' activities. He is especially for young people who need extra guidance. Talks to boys who are at risk of falling through the cracks.'
    },
    categories: ['praten', 'actief'],
    days: {
      nl: 'In de wijk te vinden of bij koffiemomenten in Huis van de Wijk',
      en: 'Found in the neighborhood or at coffee moments at the Community Center'
    },
    detailedInfo: {
      nl: 'John, liefkozend "de burgemeester van Hoogvliet" genoemd, is een ex-militair die zich inzet voor jongeren in de wijk. Hij organiseert activiteiten, gaat in gesprek met jongens die dreigen afte glijden en biedt begeleiding. Hij is zichtbaar in de wijk en bij het Huis van de Wijk.',
      en: 'John, affectionately called "the mayor of Hoogvliet," is a former military person who is committed to young people in the neighborhood. He organizes activities, talks to boys who are at risk of falling through the cracks, and provides guidance. He is visible in the neighborhood and at the Community Center.'
    },
    requirements: {
      nl: 'Gewoon aanspreken in de wijk of langskomen bij het Huis van de Wijk',
      en: 'Simply approach in the neighborhood or visit the Community Center'
    },
    ageRange: {
      nl: '10-20 jaar',
      en: '10-20 years'
    },
    iconName: 'Heart'
  }
];
