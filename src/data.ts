import { Product, Partner, PhotoshootImage } from './types';

// Categories for Section 1 - Haute Couture Carousel
export const HERO_PRODUCTS: Product[] = [
  {
    id: 'h1',
    name: 'Robe Impériale Bordo',
    price: '350 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1K-l-DMK4xiC8vHcTdu1P9_Ao4BPCEXEJ',
    category: 'Haute Couture',
    description: 'Une création de stylisme d\'exception unissant drapé impérial doré et soie bordeaux satinée.'
  },
  {
    id: 'h2',
    name: 'Costume Brodé West-Africa',
    price: '280 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1FsKhDBEbxfj9shgGqacxM8F9DqUKkq0D',
    category: 'Modern Tradition',
    description: 'Ensemble brodé de fils d\'or et de cuivre sur velours bordeaux précieux.'
  },
  {
    id: 'h3',
    name: 'Satin Abricot Flamboyant',
    price: '220 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1Mf_llVLTHdX6cmbDcRxcwBi9tJHq_pAv',
    category: 'Collection Printemps',
    description: 'Coupe fluide asymétrique en satin de soie abricot chaud et lumineux.'
  },
  {
    id: 'h4',
    name: 'Coupé Cuivré sur Mesure',
    price: '400 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1Q4A3Gg7cXseK0F5KZltIYaseU_kXPB5n',
    category: 'Prestige',
    description: 'Une robe fourreau sculpturale faite pour les plus grands tapis rouges.'
  },
  {
    id: 'h5',
    name: 'L\'Éclat d\'Ébène & Cuivre',
    price: '310 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1LSPFP8EPBuN_dmdZQ11t9zS8PbfuY9Wf',
    category: 'Collection Signature',
    description: 'Sublime design architectural aux volumes prononcés et nuances incandescentes.'
  }
];

// Partners/Clients for Section 2 (8 partners scrolling)
export const COLLABORATORS: Partner[] = [
  {
    id: 'p1',
    name: 'Collaborateur 1',
    role: 'Maison Couture',
    logo: 'https://lh3.googleusercontent.com/d/1g5SBD7ms3etBDLqg0NULuddI82h5VXLj'
  },
  {
    id: 'p2',
    name: 'Collaborateur 2',
    role: 'Maison Couture',
    logo: 'https://lh3.googleusercontent.com/d/19LJzqo6Pcq5BMO-XJ5Ll_0N90bHQDNcs'
  },
  {
    id: 'p3',
    name: 'Collaborateur 3',
    role: 'Maison Couture',
    logo: 'https://lh3.googleusercontent.com/d/1pluFSl74rI514M6Wtai3T2GHDj5TDqph'
  },
  {
    id: 'p4',
    name: 'Collaborateur 4',
    role: 'Maison Couture',
    logo: 'https://lh3.googleusercontent.com/d/18jdiuhX1VDYHh8bMb9leTmNEuQbr5AX_'
  },
  {
    id: 'p5',
    name: 'Collaborateur 5',
    role: 'Maison Couture',
    logo: 'https://lh3.googleusercontent.com/d/1gWyZlEJBcCNrfqqxQIVGmFeRICzzDTlP'
  },
  {
    id: 'p6',
    name: 'Collaborateur 6',
    role: 'Maison Couture',
    logo: 'https://lh3.googleusercontent.com/d/1QbipLzDbrr2n0YrvlLvB54gAcT3UWibG'
  },
  {
    id: 'p7',
    name: 'Collaborateur 7',
    role: 'Maison Couture',
    logo: 'https://lh3.googleusercontent.com/d/13fgkH7BIJZwiU17gWhtxZJFJiEv0nxoC'
  },
  {
    id: 'p8',
    name: 'Collaborateur 8',
    role: 'Maison Couture',
    logo: 'https://lh3.googleusercontent.com/d/1NAnvxLEujha_p55S3fa_33wg7E85BiIt'
  }
];

// Section 3: Nos Modèles (3 rows, 5 items each, or 6 items each to look great compiled into a scrollable pool)
export const ROW_1_PRODUCTS: Product[] = [
  {
    id: 'r1_1',
    name: 'Création Divina Luxe',
    price: '380 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1yexL9Vgx2BJwe7LcT-RPDeCSqWlYAm5K',
    category: 'Haute Couture',
    description: 'Une somptueuse tenue de haute couture avec des finitions brodées d\'une pure délicatesse.'
  },
  {
    id: 'r1_2',
    name: 'Prestige Royal',
    price: '420 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/15tGeoVoWUiH96wYlNT7zK7-wGN4dOPhX',
    category: 'Haute Couture',
    description: 'Robe sculpturale digne des plus grands événements de gala, conçue avec soin.'
  },
  {
    id: 'r1_3',
    name: 'Harmonie des Étoiles',
    price: '340 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1VY23ADT9tc1y9IRydnFQFyRZ3be9E4yy',
    category: 'Haute Couture',
    description: 'Lignes délicates et tissu noble pour une silhouette d\'une élégance mémorable.'
  },
  {
    id: 'r1_4',
    name: 'Majesté Or et Soie',
    price: '390 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1ojOHqbt4o5GXBQZyxT2zsoaRu4HjtEDj',
    category: 'Haute Couture',
    description: 'Robe d\'exception qui marie à merveille coupes contemporaines et détails précieux.'
  },
  {
    id: 'r1_5',
    name: 'Élégance de Coton Mali',
    price: '310 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1EKPw307iirHtVN_fcZzyzMQSbTqYoEMa',
    category: 'Haute Couture',
    description: 'Drapé raffiné avec des motifs uniques travaillés artisanalement au Mali.'
  },
  {
    id: 'r1_6',
    name: 'Brillance Sahélienne',
    price: '325 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1av87VvrA1pHHJnm2gnTM_bVP2CqW_1Fa',
    category: 'Haute Couture',
    description: 'Silhouette sophistiquée jouant avec les reflets lumineux des matières nobles.'
  },
  {
    id: 'r1_7',
    name: 'Rêve Ensoleillé',
    price: '290 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/13hZ_7mBCwgytU3Osn5ux43JaZifxTOlW',
    category: 'Haute Couture',
    description: 'Une coupe fluide audacieuse qui élance délicatement chaque mouvement.'
  },
  {
    id: 'r1_8',
    name: 'Symphonie Cuivrée',
    price: '360 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1DFPJGe95XhCmnkCtZpK_VtotX06YRFUC',
    category: 'Haute Couture',
    description: 'Volume architectural et texture d\'une incroyable finesse pour les occasions uniques.'
  },
  {
    id: 'r1_9',
    name: 'Impératrice Divine',
    price: '450 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/13klRSowDiQQCjbTz_ZZSJCGak5wVTKRt',
    category: 'Haute Couture',
    description: 'La quintessence de l\'art de la couture réunie en une unique création de prestige.'
  }
];

export const ROW_2_PRODUCTS: Product[] = [
  {
    id: 'r2_1',
    name: 'Création Or Sahélien',
    price: '340 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1sT1j7D-pZjMzo_YeUf9cd-IIwejEYDeG',
    category: 'Haute Couture',
    description: 'Une somptueuse œuvre d\'art façonnée avec des broderies d\'exception pour illuminer vos grands soirs.'
  },
  {
    id: 'r2_2',
    name: 'Élégance Brûlée Royale',
    price: '380 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1ON1V2nUcYKVdfOr-D1pGzY4GFJRZSdSX',
    category: 'Haute Couture',
    description: 'Drapé impérial et lignes architecturales s\'unissent dans une harmonie parfaite de luxe.'
  },
  {
    id: 'r2_3',
    name: 'Majesté de Gara',
    price: '295 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1pa3Qsgz4D5zyRzGX3YVIEtjHVKuOdEDv',
    category: 'Haute Couture',
    description: 'Robe sculpturale d\'inspiration traditionnelle, sublimée par de fines parures faites main.'
  },
  {
    id: 'r2_4',
    name: 'Symphonie de Bamako',
    price: '315 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1JsFsimHeVHCMOtN8Kf2JFgdpWbeepg73',
    category: 'Haute Couture',
    description: 'Une création lumineuse pour une silhouette résolument majestueuse et inoubliable.'
  },
  {
    id: 'r2_5',
    name: 'Reine Cuivrée',
    price: '270 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1CvzU9wz2X89U5dc_VvsXRw_ri_RNMQwR',
    category: 'Haute Couture',
    description: 'Robe asymétrique en tissu noble qui reflète superbement la lumière des projecteurs.'
  },
  {
    id: 'r2_6',
    name: 'Rêve Bardo de Soie',
    price: '360 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1CtcLhqiDbLmRsropPtrFyblNPYUL6fgm',
    category: 'Haute Couture',
    description: 'La splendeur de l\'artisanat haut de gamme incarnée par des broderies d\'une précision infinie.'
  },
  {
    id: 'r2_7',
    name: 'Impératrice du Désert',
    price: '420 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1WY0AbUAyUOqhch0-NjW-uIqKyCpFpSfS',
    category: 'Haute Couture',
    description: 'Gala chic incomparable caractérisé par ses matières sélectionnées et sa coupe d\'une finesse inouïe.'
  },
  {
    id: 'r2_8',
    name: 'Éclat du Sahel',
    price: '350 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1tXPRHuGrsLrMbmnuXbJ_Twy4GiQvj2xH',
    category: 'Haute Couture',
    description: 'Tailleur d\'une élégance moderne et audacieuse, réinventant le vêtement d\'apparat.'
  },
  {
    id: 'r2_9',
    name: 'Aura Divine d\'Afrique',
    price: '480 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1ImPndDblN83ZT--TWlvTJFWiBrRCZwH7',
    category: 'Haute Couture',
    description: 'L\'icône de notre collection de prestige, offrant une élégance souveraine inégalable.'
  },
  {
    id: 'r2_10',
    name: 'Harmonie des Étoiles II',
    price: '330 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1SUQXYra7AZaVAJe96AMAKICQA89q8Kyn',
    category: 'Haute Couture',
    description: 'Robe longue moderne caractérisée par son tombé fluide impérial et intemporel.'
  },
  {
    id: 'r2_11',
    name: 'Splendeur Épurée',
    price: '390 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1A8QL6JHniGpw6MH_bJJrWhcjp-IokMV7',
    category: 'Haute Couture',
    description: 'Robe sculptée d\'une noblesse rare, parfaite pour faire sensation lors de chaque défilé.'
  },
  {
    id: 'r2_12',
    name: 'Couronne Cuivrée Sauvage',
    price: '410 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1zrDAYqOHPP9O56fNH6TYLwctKXXP6sqn',
    category: 'Haute Couture',
    description: 'La rencontre magique de l\'art de la broderie fine du Mali et du design haute-fantasie.'
  }
];

export const ROW_3_PRODUCTS: Product[] = [
  {
    id: 'r3_1',
    name: 'Princesse de Tombouctou',
    price: '380 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1WNhSowIZZJLGyZXz1BRT-FZelfR1MuSD',
    category: 'Haute Couture',
    description: 'Une somptueuse traîne brodée à la main d\'ornements traditionnels d\'une finesse royale.'
  },
  {
    id: 'r3_2',
    name: 'Éclat Impérial de Soie',
    price: '340 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1g9kGkcGXSDuik_xE10IgMx22R_UU82n_',
    category: 'Haute Couture',
    description: 'Robe impériale fluide, drapée minutieusement pour sculpter une allure souveraine.'
  },
  {
    id: 'r3_3',
    name: 'Symphonie du Sahara',
    price: '310 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1-kGL7qnu2ZMz-O6iwR807qjARBh7KC6i',
    category: 'Haute Couture',
    description: 'Création d\'exception combinant tissus nobles et détails précieux d\'inspiration sahélienne.'
  },
  {
    id: 'r3_4',
    name: 'Drapé Royal Bardo',
    price: '390 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1x5gJnFbor6XG65XdYR49DnrmYwCSANCn',
    category: 'Haute Couture',
    description: 'Un merveilleux travail de plissage artisanal mariant élégance contemporaine et tradition.'
  },
  {
    id: 'r3_5',
    name: 'Brillance de l\'Afrique',
    price: '420 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1wRRUDTYCGOczJP_-wiInnHE-zc1s7awS',
    category: 'Haute Couture',
    description: 'Une pièce d\'apparat unique ornée de broderies délicates de fil doré.'
  },
  {
    id: 'r3_6',
    name: 'Charme Sahélien',
    price: '320 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1MRbsNb4ElaoUmI_AhnhS9dWLUU3brPgI',
    category: 'Haute Couture',
    description: 'Finitions parfaites et broderies d\'artisanat fin du Mali pour magnifier vos grands soirs.'
  },
  {
    id: 'r3_7',
    name: 'Rêve d\'Ivoire et d\'Or',
    price: '450 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/15fBUEiIPYuQmn7UjJ6-ZYyBI7pbbH8-v',
    category: 'Haute Couture',
    description: 'Lignes architecturales et silhouette longiligne sublimée par un drapé majestueux.'
  },
  {
    id: 'r3_8',
    name: 'Divine Ébène Luxe',
    price: '370 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1k6MnJZyCm8lUWlESM8VsQBi0b1zcux30',
    category: 'Haute Couture',
    description: 'Le summum du luxe avec des finitions à la main d\'une précision incomparable.'
  },
  {
    id: 'r3_9',
    name: 'Souveraine des Étoiles',
    price: '395 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/1mbNk2otydOwyy837KXA91D11rXnRR5e9',
    category: 'Haute Couture',
    description: 'Silhouette enveloppée de matières scintillantes d\'une qualité rare pour les événements uniques.'
  },
  {
    id: 'r3_10',
    name: 'Aura Céleste',
    price: '410 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/11REmzIHmSj3Nd9N9XUtqyiyTmcpqlhzy',
    category: 'Haute Couture',
    description: 'Coupe audacieuse et couture sculptée digne des tapis rouges et défilés les plus prestigieux.'
  },
  {
    id: 'r3_11',
    name: 'Reine de Gala',
    price: '480 000 FCFA',
    image: 'https://lh3.googleusercontent.com/d/15qBE3o0yo29yxTVp4rbcoH8XE6V2obcx',
    category: 'Haute Couture',
    description: 'Une création magistrale en soie impériale, chef-d\'œuvre absolu de notre atelier de haute couture.'
  }
];

// Section 6 (Page 2, Section 1): Nos Photoshoots (8 scrolling images)
export const PHOTOSHOOT_IMAGES: PhotoshootImage[] = [
  {
    id: 'ps1',
    url: 'https://lh3.googleusercontent.com/d/1b8kcnGMOMl2R8OPbf5QUSJqC02I2fA3d',
    title: 'Coulisses Studio Bamako'
  },
  {
    id: 'ps2',
    url: 'https://images.unsplash.com/photo-1512316609839-ce289d330e75?q=80&w=600&auto=format&fit=crop',
    title: 'Éclat d\'Ébène & Cuivre'
  },
  {
    id: 'ps3',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
    title: 'Soie Flamboyante en Mouvement'
  },
  {
    id: 'ps4',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    title: 'Regard Impérial'
  },
  {
    id: 'ps5',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    title: 'Le Velours Royal'
  },
  {
    id: 'ps6',
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    title: 'Sourire de Cuivre'
  },
  {
    id: 'ps7',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    title: 'Glamour Bardo'
  },
  {
    id: 'ps8',
    url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop',
    title: 'L\'Atelier de Couture'
  }
];

// Single cosmetics makeup image (Section 2 - Page 2)
export const MAKEUP_IMAGE = {
  url: 'https://lh3.googleusercontent.com/d/1KVVyCDFgD__u5jAcc4c2_EhQpKygmcAk',
  title: 'Maquillage Artistique Impérial',
  description: 'Un éclat cuivré ardent marié à la profondeur d\'un bordeaux satiné pour magnifier chaque visage.'
};
