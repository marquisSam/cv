export interface CvSkill {
  name: string;
  image?: string;
  alt?: string;
  description?: string;
}

export interface CvWorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date;
  reference: CvReference;
  description: {
    responsibilities: string[];
    achievements: string[];
    demo?: Demo[];
  };
}
export interface Demo {
  title: string;
  link: string;
}
export interface CvReference {
  name: string;
  function: string;
  email: string;
  phone: string;
}
