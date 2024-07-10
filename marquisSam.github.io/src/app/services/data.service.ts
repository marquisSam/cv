import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  combineLatest,
  defaultIfEmpty,
  filter,
  map,
  Observable,
  of,
  switchMap,
  take,
} from 'rxjs';
import { LangService } from './lang.service';
import { CvSkill, CvWorkExperience, SupportedLanguage } from './model';

export enum dataSetKeys {
  hardSkills = 'hardSkills',
  softSkills = 'softSkills',
  transferableAssets = 'transferableAssets',
  wouldLearn = 'wouldLearn',
  workExperiences = 'workExperiences',
}

export type datasByLanguage = {
  [SupportedLanguage.EN]: datas;
  [SupportedLanguage.FR]: datas;
};

export interface datas {
  hardSkills: CvSkill[];
  softSkills: CvSkill[];
  transferableAssets: CvSkill[];
  wouldLearn: CvSkill[];
  workExperiences: CvWorkExperience[];
}

export interface ReducerData {
  data: CvSkill[] | CvWorkExperience[];
  lang: SupportedLanguage;
  datasetKey: dataSetKeys;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private LangService: LangService) {
    this.LangService.currentLanguage$
      .pipe(takeUntilDestroyed())
      .subscribe(this.#getData);
  }

  #getDefaultData = () => ({
    hardSkills: [],
    softSkills: [],
    transferableAssets: [],
    wouldLearn: [],
    workExperiences: [],
  });

  #dataStore$: BehaviorSubject<datasByLanguage> =
    new BehaviorSubject<datasByLanguage>({
      [SupportedLanguage.EN]: this.#getDefaultData(),
      [SupportedLanguage.FR]: this.#getDefaultData(),
    });

  #dataSelector$: Observable<datas> = combineLatest([
    this.LangService.currentLanguage$,
    this.#dataStore$,
  ]).pipe(
    map(([lang, data]) => data[lang]),
    filter((data): data is datas => !!data)
  );

  //PUBLIC SELECTOR
  workExperiencesSelector$: Observable<CvWorkExperience[]> =
    this.#dataSelector$.pipe(
      map((data) => data.workExperiences.map(this.#formatWorkExperience)),
      map((data) =>
        data.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
      ),
      defaultIfEmpty([])
    );
  hardSkillsSelector$: Observable<CvSkill[]> = this.#dataSelector$.pipe(
    map((data) => data.hardSkills),
    defaultIfEmpty([])
  );
  softSkillsSelector$: Observable<CvSkill[]> = this.#dataSelector$.pipe(
    map((data) => data.softSkills),
    defaultIfEmpty([])
  );
  wouldLearnSelector$: Observable<CvSkill[]> = this.#dataSelector$.pipe(
    map((data) => data.wouldLearn),
    defaultIfEmpty([])
  );
  transferableAssetsSelector$: Observable<CvSkill[]> = this.#dataSelector$.pipe(
    map((data) => data.transferableAssets),
    defaultIfEmpty([])
  );

  #getData = (lang: SupportedLanguage): void => {
    Object.keys(dataSetKeys).forEach((key) => {
      this.#fetchDataForLang(lang, key as dataSetKeys);
    });
  };

  #fetchDataForLang(lang: SupportedLanguage, datasetKey: dataSetKeys): void {
    if (this.#dataStore$.value[lang]?.[datasetKey].length) return;

    this.http
      .get<CvSkill[] | CvWorkExperience[]>(
        `assets/data/${datasetKey}-${lang}.json`
      )
      .pipe(
        filter((datas) => !!datas),
        switchMap((datas) => of({ data: datas, lang, datasetKey })),
        take(1)
      )
      .subscribe((data: ReducerData) => this.#reducer(data));
  }

  #reducer = ({ lang, data, datasetKey }: ReducerData) => {
    this.#dataStore$.next({
      ...this.#dataStore$.value,
      [lang]: { ...this.#dataStore$.value[lang], [datasetKey]: data },
    });
  };

  #formatWorkExperience(workExperience: CvWorkExperience): CvWorkExperience {
    return {
      ...workExperience,
      startDate: new Date(workExperience.startDate),
      endDate: new Date(workExperience.endDate),
    };
  }
}
