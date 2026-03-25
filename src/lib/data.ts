// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavItem {
  name: string;
  link: string;
}

export interface Universe {
  id: string;
  name: string;
  description: string;
  color: string;
  imageUrl: string;
}

export interface Trip {
  id: string;
  title: string;
  universe: string;
  location: string;
  duration: string;
  priceFrom: number;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface ExperienceStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  trip: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { name: "Concept", link: "#concept" },
  { name: "Univers", link: "#univers" },
  { name: "Voyages", link: "#voyages" },
  { name: "Expérience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

// ─── Universes ───────────────────────────────────────────────────────────────

export const universes: Universe[] = [
  {
    id: "dark-romance",
    name: "Dark Romance",
    description: "Châteaux sombres, passion interdite, mystère italien",
    color: "bg-[#4a0e1e]",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80&fit=crop",
  },
  {
    id: "k-drama",
    name: "K-Drama",
    description: "Séoul, cafés secrets et scènes iconiques",
    color: "bg-[#9f1239]",
    imageUrl:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1920&q=80&fit=crop",
  },
  {
    id: "terres-du-milieu",
    name: "Terres du Milieu",
    description: "Nouvelle-Zélande : la Comté, le Mordor, Fondcombe",
    color: "bg-[#064e3b]",
    imageUrl:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80&fit=crop",
  },
  {
    id: "fantastique",
    name: "Fantastique & Heroïc Fantasy",
    description: "Écosse, Islande, Irlande : les terres de légendes",
    color: "bg-[#1e1b4b]",
    imageUrl:
      "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1920&q=80&fit=crop",
  },
  {
    id: "manga-anime",
    name: "Manga & Anime",
    description: "Tokyo, Kyoto : plongez dans vos mangas préférés",
    color: "bg-[#3b0764]",
    imageUrl:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1920&q=80&fit=crop",
  },
  {
    id: "cinema-classique",
    name: "Cinéma Classique",
    description: "De la Tunisie à l'Espagne : les décors mythiques",
    color: "bg-[#451a03]",
    imageUrl:
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1920&q=80&fit=crop",
  },
];

// ─── Trips ───────────────────────────────────────────────────────────────────

export const trips: Trip[] = [
  {
    id: "dark-romance-italie",
    title: "Les Châteaux de la Dark Romance",
    universe: "dark-romance",
    location: "Italie",
    duration: "7 jours",
    priceFrom: 1890,
    description:
      "Explorez les châteaux italiens les plus mystérieux, entre passion interdite et secrets ancestraux. Nuits dans des palazzos hantés par l'histoire.",
    imageUrl:
      "https://images.unsplash.com/photo-1657868674989-4061c2d335fb?w=1920&q=80&fit=crop",
    tags: ["Romance", "Mystère", "Châteaux"],
  },
  {
    id: "k-drama-seoul",
    title: "Sur les traces de K-Drama",
    universe: "k-drama",
    location: "Séoul, Corée du Sud",
    duration: "10 jours",
    priceFrom: 2290,
    description:
      "Revivez les scènes les plus iconiques de vos dramas favoris. Des cafés de Gangnam aux palais de Bukchon, chaque coin de rue raconte une histoire d'amour.",
    imageUrl:
      "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1920&q=80&fit=crop",
    tags: ["Romance", "Culture", "Gastronomie"],
  },
  {
    id: "lotr-nz",
    title: "La Quête de l'Anneau",
    universe: "terres-du-milieu",
    location: "Nouvelle-Zélande",
    duration: "14 jours",
    priceFrom: 3490,
    description:
      "Parcourez la Terre du Milieu, de la paisible Comté aux pentes du Mordor. Visitez les lieux de tournage mythiques du Seigneur des Anneaux.",
    imageUrl:
      "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1920&q=80&fit=crop",
    tags: ["Aventure", "Nature", "Épique"],
  },
  {
    id: "outlander-ecosse",
    title: "Outlander : L'Écosse Sauvage",
    universe: "fantastique",
    location: "Écosse",
    duration: "8 jours",
    priceFrom: 1690,
    description:
      "Traversez les Highlands sur les traces de Claire et Jamie. Châteaux, landes sauvages et whisky au coin du feu.",
    imageUrl:
      "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1920&q=80&fit=crop",
    tags: ["Romance", "Histoire", "Nature"],
  },
  {
    id: "harry-potter-angleterre",
    title: "Harry Potter : Le Monde des Sorciers",
    universe: "fantastique",
    location: "Angleterre",
    duration: "6 jours",
    priceFrom: 1490,
    description:
      "Des studios Warner Bros à la voie 9¾, plongez dans le monde magique de Poudlard. Festin dans la Grande Salle inclus.",
    imageUrl:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=1920&q=80&fit=crop",
    tags: ["Magie", "Famille", "Iconique"],
  },
  {
    id: "star-wars-tunisie",
    title: "Star Wars : Les Sables de Tatooine",
    universe: "cinema-classique",
    location: "Tunisie",
    duration: "7 jours",
    priceFrom: 1590,
    description:
      "Marchez sur les traces de Luke Skywalker dans les décors originaux de Tatooine. Des dunes de Mos Espa aux maisons troglodytes de Matmata.",
    imageUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=80&fit=crop",
    tags: ["Sci-Fi", "Désert", "Iconique"],
  },
  {
    id: "got-espagne-croatie",
    title: "Game of Thrones : Les Sept Royaumes",
    universe: "fantastique",
    location: "Espagne & Croatie",
    duration: "10 jours",
    priceFrom: 2190,
    description:
      "De Port-Réal à Dorne, explorez les décors grandioses de Westeros. Dubrovnik, Séville, et les forteresses qui ont forgé la légende.",
    imageUrl:
      "https://images.unsplash.com/photo-1555990793-da11153b2473?w=1920&q=80&fit=crop",
    tags: ["Épique", "Histoire", "Forteresses"],
  },
  {
    id: "wednesday-roumanie",
    title: "Wednesday : Le Mystère Roumain",
    universe: "dark-romance",
    location: "Roumanie",
    duration: "6 jours",
    priceFrom: 1390,
    description:
      "Découvrez la Roumanie gothique de Wednesday Addams. Châteaux transylvains, forêts brumeuses et ambiance surnaturelle garantie.",
    imageUrl:
      "https://images.unsplash.com/photo-1577720643272-265f09367456?w=1920&q=80&fit=crop",
    tags: ["Gothique", "Mystère", "Surnaturel"],
  },
  {
    id: "manga-tokyo",
    title: "Le Tokyo des Mangas",
    universe: "manga-anime",
    location: "Japon",
    duration: "12 jours",
    priceFrom: 2890,
    description:
      "D'Akihabara à Kyoto, vivez le Japon comme dans vos mangas. Cosplay, temples sacrés, et ramen authentiques dans les ruelles cachées.",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80&fit=crop",
    tags: ["Anime", "Culture", "Immersif"],
  },
  {
    id: "vikings-islande-norvege",
    title: "Mythes Nordiques : Vikings & Sagas",
    universe: "fantastique",
    location: "Islande & Norvège",
    duration: "9 jours",
    priceFrom: 2490,
    description:
      "Naviguez sur les fjords, explorez les volcans et marchez sur les terres des dieux nordiques. Aurora boreale en bonus hivernal.",
    imageUrl:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1920&q=80&fit=crop",
    tags: ["Aventure", "Mythologie", "Nature"],
  },
  {
    id: "dune-jordanie",
    title: "Dune : Les Déserts Sacrés",
    universe: "cinema-classique",
    location: "Jordanie",
    duration: "7 jours",
    priceFrom: 1890,
    description:
      "Wadi Rum, la cité perdue de Pétra et les paysages d'Arrakis. Dormez sous les étoiles dans le désert qui a inspiré Frank Herbert.",
    imageUrl:
      "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=1920&q=80&fit=crop",
    tags: ["Sci-Fi", "Désert", "Épique"],
  },
  {
    id: "squid-game-coree",
    title: "Squid Game : La Corée Secrète",
    universe: "k-drama",
    location: "Corée du Sud",
    duration: "8 jours",
    priceFrom: 2090,
    description:
      "Explorez la face cachée de la Corée. Des îles isolées aux quartiers underground de Séoul, vivez le thriller grandeur nature.",
    imageUrl:
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1920&q=80&fit=crop",
    tags: ["Thriller", "Urbain", "Immersif"],
  },
];

// ─── Experience Steps ────────────────────────────────────────────────────────

export const experienceSteps: ExperienceStep[] = [
  {
    id: "step-01",
    number: "01",
    title: "Choisissez votre univers",
    description:
      "Parcourez nos collections et trouvez l'univers qui vous fait vibrer.",
  },
  {
    id: "step-02",
    number: "02",
    title: "On écrit votre scénario",
    description:
      "Nos experts concoctent un itinéraire sur mesure, entre lieux de tournage et expériences exclusives.",
  },
  {
    id: "step-03",
    number: "03",
    title: "Vivez chaque scène",
    description:
      "Guides spécialisés, accès privilégiés, mises en scène immersives : vous êtes le héros.",
  },
  {
    id: "step-04",
    number: "04",
    title: "Repartez transformé",
    description:
      "Des souvenirs cinématographiques, des photos dignes d'un film, une histoire à raconter.",
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: 500, suffix: "+", label: "voyageurs immersifs" },
  { value: 18, suffix: "", label: "destinations cinématographiques" },
  { value: 12, suffix: "", label: "univers disponibles" },
  { value: 98, suffix: "%", label: "de satisfaction" },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    quote: "J'ai marché dans la Comté. J'ai pleuré. C'était magique.",
    author: "Sophie L.",
    trip: "Voyage Seigneur des Anneaux",
  },
  {
    quote: "Séoul comme dans mes K-Dramas préférés. Un rêve éveillé.",
    author: "Camille D.",
    trip: "Voyage K-Drama",
  },
  {
    quote: "Les châteaux italiens au clair de lune... frissons garantis.",
    author: "Léa M.",
    trip: "Voyage Dark Romance",
  },
  {
    quote: "Mon fils et moi avons vécu Harry Potter pour de vrai.",
    author: "Marc T.",
    trip: "Voyage Harry Potter",
  },
  {
    quote: "Tatooine existe. Je l'ai foulé.",
    author: "Antoine R.",
    trip: "Voyage Star Wars",
  },
  {
    quote: "Chaque rue de Dubrovnik me ramenait à Westeros.",
    author: "Julie B.",
    trip: "Voyage Game of Thrones",
  },
];
