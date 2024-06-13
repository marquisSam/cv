import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { QuickInfoComponent } from './quick-info/quick-info.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { CvSkill } from '../../model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cv-sidebar',
  standalone: true,
  imports: [CommonModule, QuickInfoComponent, SkillListComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get('./assets/data/_hardsSkill.json').subscribe((data) => {
      console.log(data);
    });
  }
  hardSkills: CvSkill[] = [
    {
      name: 'JavaScript, Typescript',
      image: 'assets/imgs/h-skill/js.png',
      alt: 'JavaScript, Typescript',
      description:
        "Langages de programmation essentiels pour le développement web et la création d'applications interactives.",
    },
    {
      name: 'Css, Scss',
      image: 'assets/imgs/h-skill/css-3.png',
      alt: 'Css, Scss',
      description:
        'Technologies de style pour le design et la mise en forme des pages web, permettant des designs adaptatifs et dynamiques.',
    },
    {
      name: 'Html',
      image: 'assets/imgs/h-skill/html-5-logotype.png',
      alt: 'Html',
      description:
        'Langage de balisage standard utilisé pour créer et structurer des pages web.',
    },
    {
      name: 'Node.js',
      image: 'assets/imgs/h-skill/node-js.png',
      alt: 'Node js',
      description:
        'Plateforme côté serveur basée sur le moteur JavaScript V8 de Chrome, utilisée pour construire des applications réseau rapides.',
    },
    {
      name: 'Angular',
      image: 'assets/imgs/h-skill/Angular.png',
      alt: 'Angular',
      description:
        'Framework structuré pour les applications web dynamiques, permettant de créer des interfaces utilisateur riches et interactives.',
    },
    {
      name: 'Git',
      image: 'assets/imgs/h-skill/git.png',
      alt: 'Git',
      description:
        'Système de contrôle de version décentralisé pour gérer le code source des projets de développement logiciel.',
    },
    {
      name: 'JSON',
      image: 'assets/imgs/h-skill/json-file.png',
      alt: 'JSON',
      description:
        "Format léger d'échange de données, facile à lire et à écrire pour les humains, et facile à analyser et à générer pour les machines.",
    },
    {
      name: 'Web Applications',
      image: 'assets/imgs/h-skill/webapp.png',
      alt: 'Web Applications',
      description:
        'Applications exécutées sur un serveur web, accessibles via un réseau comme Internet ou une intranet.',
    },
    {
      name: 'Responsive Design',
      image: 'assets/imgs/h-skill/responsive-design.png',
      alt: 'Responsive',
      description:
        "Approche de conception web qui vise à créer des sites offrant une expérience de visualisation optimale sur une large gamme d'appareils.",
    },
  ];

  softSkills: CvSkill[] = [
    {
      name: 'Python',
      image: 'assets/imgs/s-skill/python.png',
      alt: 'Python',
      description:
        "Langage de programmation polyvalent, idéal pour le scripting et le développement rapide d'applications.",
    },
    {
      name: 'Rest api',
      image: 'assets/imgs/s-skill/api.png',
      alt: 'Rest',
      description:
        "Protocole standard pour la conception d'interfaces de programmation d'applications web.",
    },
    {
      name: 'React',
      image: 'assets/imgs/s-skill/React.png',
      alt: 'React',
      description:
        'Bibliothèque JavaScript pour construire des interfaces utilisateur interactives et dynamiques.',
    },
    {
      name: 'SEO',
      image: 'assets/imgs/s-skill/seo.png',
      alt: 'SEO',
      description:
        "Techniques et stratégies pour améliorer la visibilité d'un site web dans les résultats des moteurs de recherche.",
    },
    {
      name: 'WCAG',
      image: 'assets/imgs/s-skill/accessability.png',
      alt: 'WCAG',
      description:
        'Directives pour rendre le contenu web plus accessible aux personnes handicapées.',
    },
    {
      name: 'CMS',
      image: 'assets/imgs/s-skill/cms.png',
      alt: 'CMS',
      description:
        'Systèmes de gestion de contenu utilisés pour créer et gérer des sites web numériques.',
    },
    {
      name: 'Jasmine',
      image: 'assets/imgs/s-skill/jasmine.png',
      alt: 'Jasmine',
      description:
        'Cadre de test pour JavaScript, utilisé pour tester la logique et le comportement du code.',
    },
    {
      name: 'Karma',
      image: 'assets/imgs/s-skill/karma.png',
      alt: 'Karma',
      description:
        'Outil de test automatisé pour les applications JavaScript, facilitant les tests sur plusieurs navigateurs.',
    },
    {
      name: 'NPM',
      image: 'assets/imgs/s-skill/npm.png',
      alt: 'NPM',
      description:
        "Gestionnaire de paquets pour JavaScript, permettant de partager et d'utiliser des modules de code.",
    },
    {
      name: 'Jira',
      image: 'assets/imgs/s-skill/jira.png',
      alt: 'Jira',
      description:
        'Outil de gestion de projets et de suivi des bugs, utilisé pour améliorer la coordination des équipes de développement.',
    },
    {
      name: 'RXJS',
      image: 'assets/imgs/s-skill/rxjs.png',
      alt: 'RXJS',
      description:
        'Bibliothèque pour la programmation réactive utilisant des observables pour gérer les événements et les données asynchrones.',
    },
    {
      name: 'NGRX',
      image: 'assets/imgs/s-skill/ngrx-logo.png',
      alt: 'ngrx',
      description:
        "Bibliothèque de gestion d'état inspirée par Redux pour les applications Angular, facilitant la gestion des états globaux.",
    },
  ];

  transferableAsset: CvSkill[] = [
    {
      name: 'Gérer des activités dans des délais serrés',
    },
    {
      name: 'Prendre en considération le facteur humain pour favoriser un climat sain et agréable',
    },
    {
      name: 'Considérer rigoureusement l’efficience et la qualité des services',
    },
    {
      name: 'Anglais fonctionnel avancé',
    },
    {
      name: 'Facilité avec la résolution de problème',
    },
    {
      name: 'Grand sens de l’adaptabilité',
    },
    {
      name: 'Bonne communication interpersonnelle, aime le travail d’équipe',
    },
    {
      name: 'Travailler en équipe et ouverture à la critique',
    },
    {
      name: 'Autodidacte, apprend rapidement',
    },
  ];
}
