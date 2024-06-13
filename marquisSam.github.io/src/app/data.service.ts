import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CvSkill } from './model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getHardSkills(): Observable<CvSkill> {
    return this.http.get<CvSkill>('./assets/data/_hardsSkill.json');
  }

  constructor(private http: HttpClient) {}
}
