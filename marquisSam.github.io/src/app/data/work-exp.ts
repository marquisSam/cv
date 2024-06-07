import { CvWorkExperience } from './model';

const bluerushExperience: CvWorkExperience = {
  title: 'Développeur Web',
  company: 'Bluerush',
  location: 'Montreal, QC',
  startDate: new Date('2016-01-01'),
  endDate: new Date('2022-12-31'),
  references: [
    {
      name: 'Richard Pineault',
      function: 'CTO',
      email: '', // Email not provided
      phone: '514-813-0866',
    },
  ],
  responsibilities: [
    'Analyser les designs et les devis afin de rendre avec exactitude les projets et les applications web.',
    'Analyser le fonctionnement des équations de calculateur bancaire afin de les reproduire en JavaScript.',
    "M'assurer du bon fonctionnement des projets et applications. Remplir des tickets dans Jira au besoin.",
    "Participer à des réunions 'scrum' sur une base journalière afin d'informer le reste de l'équipe des derniers développements.",
    'Faire des séances de révisions de code avec mes collègues.',
    'Maintenir un produit à jour.',
    "Participer à des appels client afin d'appuyer le gestionnaire de projet sur des formalités techniques.",
    'Réaliser des tâches complexes dans des temps limités.',
  ],
  achievements: [
    "Collaboration à la conception d'un produit vidéo personnalisé, incluant une extension After-effects pour créer des vidéos modulaires avec des données personnalisées.",
    "Réalisation d'une page qui iframe les vidéos du produit, avec redimensionnement dynamique selon le viewport de l'utilisateur.",
    "Développement d'une page de test pour le produit de vidéo personnalisé sur Angular, intégrant des fonctionnalités avancées et communication avec un API.",
  ],
  demo: [
    {
      title: 'Page Iframe video personalisée',
      link: 'https://individeo.com/individeo/preview/vfSfdYQSRGRMVRXmmw-651/?lang=fr-CA&ivuci=25',
    },
    {
      title: 'Page test pour le produit de vidéo personalisé.',
      link: 'https://support.bluerush.com/academy/how-can-i-test-my-video-1',
    },
  ],
};

export const workExperiences: CvWorkExperience[] = [bluerushExperience];
