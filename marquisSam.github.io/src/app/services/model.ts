// SKILLS
export interface CvSkill {
  name: string;
  image?: string;
  alt?: string;
  description?: string;
}

//WORK EXPERIENCE
export interface CvWorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date;
  references: CvReference[];
  responsibilities: string[];
  achievements: string[];
  demo?: Demo[];
}
export interface Demo {
  title: string;
  link: string;
  linkLabel: string;
}
export interface CvReference {
  name: string;
  function: string;
  email: string;
  phone: string;
}

export enum SupportedLanguage {
  EN = 'en',
  FR = 'fr',
}
