import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RamschemaService {
  private coursedataSubject = new BehaviorSubject<any[]>([]); // BehaviorSubject för att hantera prenumerationer

  constructor() {
    // Hämta data från local storage vid konstruktion av servicen
    const storedData = JSON.parse(localStorage.getItem('kursData') || '[]');
    this.coursedataSubject.next(storedData); // Uppdatera BehaviorSubject med den hämtade datan
  }

  // Metod för att prenumerera på kursdata
  getCoursedataObservable() {
    return this.coursedataSubject.asObservable();
  }

  // Metod för att uppdatera kursdata och spara den i local storage
  updateKursData(kursData: any[]) {
    localStorage.setItem('kursData', JSON.stringify(kursData)); // Spara data i local storage
    this.coursedataSubject.next(kursData); // Uppdatera BehaviorSubject med den nya datan
  }
}
