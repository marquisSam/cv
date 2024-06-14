import { workExperiences } from '../.assets/data/work-exp';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, startWith, tap } from 'rxjs';
import { CvSkill, CvWorkExperience } from './model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
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

  constructor(private http: HttpClient) {}
}
