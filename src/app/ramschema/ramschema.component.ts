import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RamschemaService } from '../services/ramschema.service';
import { Coursedata } from '../model/coursedata';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ramschema',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ramschema.component.html',
  styleUrl: './ramschema.component.scss'
})
export class RamschemaComponent implements OnInit {
  selectedCourses: Coursedata[] = [];
  totalPoints: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadCoursesFromLocalStorage();
    this.calculateTotalPoints();
  }

  loadCoursesFromLocalStorage(): void {
    const storedCoursesJSON = localStorage.getItem('selectedCourses');
    if (storedCoursesJSON) {
      this.selectedCourses = JSON.parse(storedCoursesJSON);
    }
  }

  removeCourse(course: any): void {
    // Ta bort kursen från local storage
    let selectedCourses: any[] = JSON.parse(localStorage.getItem('selectedCourses') || '[]');
    const index = selectedCourses.findIndex((c: any) => c.courseCode === course.courseCode);
    if (index !== -1) {
      selectedCourses.splice(index, 1);
      localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
    }

    // Uppdatera arrayen för att ta bort kursen från skärmen
    this.selectedCourses = this.selectedCourses.filter((c: any) => c.courseCode !== course.courseCode);

    // Uppdatera totala poängen efter att man tagit bort kurs
    this.calculateTotalPoints();
  }

  clearLocalStorage(): void {
    localStorage.removeItem('selectedCourses');
    this.selectedCourses = []; // Uppdatera den lokala arrayen för att tömma den på skärmen
    this.totalPoints = 0; // Återställ poängen
  }

  calculateTotalPoints(): void {
    this.totalPoints = this.selectedCourses.reduce((total, course) => total + course.points, 0);
  }
}
