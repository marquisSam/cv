import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, Subject } from 'rxjs';
import { CvSkill, CvWorkExperience } from './model';
import { Language, LangService } from './lang.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export type datasByLanguage = {
  [Language.EN]: datas;
  [Language.FR]: datas;
};
export interface datas {
  hardSkills: CvSkill[];
  softSkills: CvSkill[];
  transferableAssets: CvSkill[];
  wouldLearn: CvSkill[];
  workExperiences: CvWorkExperience[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getDefaultData() {
    return {
      hardSkills: [],
      softSkills: [],
      transferableAssets: [],
      wouldLearn: [],
      workExperiences: [],
    };
  }

  data$: Subject<datasByLanguage> = new Subject<datasByLanguage>();

  constructor(private http: HttpClient, private LangService: LangService) {
    this.data$.next({
      [Language.EN]: this.getDefaultData(),
      [Language.FR]: this.getDefaultData(),
    });
    this.data$.complete();

    this.LangService.currentLanguage$
      .pipe(takeUntilDestroyed())
      .subscribe((lang) => {
        console.log('lang', lang);
      });
  }

  #getHardSkillsLang(lang: Language): Observable<CvSkill[]> {
    return this.http
      .get<CvSkill[]>(`assets/data/hardsSkill-${lang}.json`)
      .pipe(filter((datas) => !!datas));
  }

  get getHardSkills(): Observable<CvSkill[]> {
    return this.http
      .get<CvSkill[]>('assets/data/hardsSkill.json')
      .pipe(filter((datas) => !!datas));
  }
  get getSoftSkills(): Observable<CvSkill[]> {
    return this.http
      .get<CvSkill[]>('assets/data/softSkill.json')
      .pipe(filter((datas) => !!datas));
  }
  get getTransferableAssets(): Observable<CvSkill[]> {
    return this.http
      .get<CvSkill[]>('assets/data/transferableAsset.json')
      .pipe(filter((datas) => !!datas));
  }
  get getWouldLearn(): Observable<CvSkill[]> {
    return this.http
      .get<CvSkill[]>('assets/data/wouldLearn.json')
      .pipe(filter((datas) => !!datas));
  }
  get getWorkExperiences(): Observable<CvWorkExperience[]> {
    return this.http.get<CvWorkExperience[]>('assets/data/workExp.json').pipe(
      filter((datas) => !!datas),
      map((datas) => datas.map((data) => this.formatWorkExperience(data))),
      map((datas) => this.sortByMostRecent(datas))
    );
  }

  formatWorkExperience(workExperience: CvWorkExperience): CvWorkExperience {
    return {
      ...workExperience,
      startDate: new Date(workExperience.startDate),
      endDate: new Date(workExperience.endDate),
    };
  }
  sortByMostRecent(workExperiences: CvWorkExperience[]): CvWorkExperience[] {
    return workExperiences.sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime()
    );
  }
}
