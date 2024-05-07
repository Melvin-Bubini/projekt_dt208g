import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coursedata } from '../model/coursedata';

@Injectable({
  providedIn: 'root'
})
export class CoursedataService {

  url: string = "https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json";

  constructor(private http: HttpClient) { }

  getCoursedata(): Observable<Coursedata[]> {
    return this.http.get<Coursedata[]>(this.url);
  }
}
