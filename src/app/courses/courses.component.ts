import { Component } from '@angular/core';
import { Coursedata } from '../model/coursedata';
import { CoursedataService } from '../services/coursedata.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // Properties
  coursedatalist: Coursedata[] = [];
  filteredCoursedata: Coursedata[] = [];
  filterValue: string = "";
  sortedCoursedata: Coursedata[] = [];
  sortedValue: string = "";
  uniqueSubjects: string[] = []; // Lägg till en egenskap för att lagra unika ämnen
  selectedSubject: string = ""; // Lägg till en egenskap för att lagra det valda ämnet
  courseAdded: boolean = false;

  constructor(private coursedataservice: CoursedataService) { }

  ngOnInit() {
    this.coursedataservice.getCoursedata().subscribe(data => {
      this.coursedatalist = data;
      this.filteredCoursedata = data;
      this.generateUniqueSubjects(); // Generera en lista över unika ämnen när data laddas
    });
  }

  filterCoursedata(): void {
    this.filteredCoursedata = this.coursedatalist.filter((coursedata) =>
      coursedata.courseCode.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      coursedata.courseName.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  sortingFilter(sortBy: string): void {
    switch (sortBy) {
      case 'kurskod':
        this.filteredCoursedata = this.coursedatalist.slice().sort((a, b) => a.courseCode.localeCompare(b.courseCode));
        break;

      case 'kursnamn':
        this.filteredCoursedata = this.coursedatalist.slice().sort((a, b) => a.courseName.localeCompare(b.courseName));
        break;

      case 'points':
        this.filteredCoursedata = this.coursedatalist.slice().sort((a, b) => b.points - a.points);
        break;

      case 'subject':
        this.filteredCoursedata = this.coursedatalist.slice().sort((a, b) => a.subject.localeCompare(b.subject));
        break;

      default:
        break;
    }
  }

  // Metod för att generera en lista över unika ämnen från kursdatalistan
  generateUniqueSubjects(): void {
    this.uniqueSubjects = [...new Set(this.coursedatalist.map(coursedata => coursedata.subject))];
  }

  // Metod för att filtrera data efter det valda ämnet
  filterBySubject(): void {
    if (this.selectedSubject) {
      this.filteredCoursedata = this.coursedatalist.filter(coursedata => coursedata.subject === this.selectedSubject);
    } else {
      this.filteredCoursedata = this.coursedatalist; // Visa alla kurser om inget ämne är valt
    }
  }

  storeCourseInLocalStorage(coursedata: Coursedata): void {
    // Hämta befintliga kurser från local storage om det finns några
    let storedCourses: Coursedata[] = JSON.parse(localStorage.getItem('selectedCourses') || '[]');

    // Lägg till den nya kursen till arrayen
    storedCourses.push(coursedata);

    // Spara den uppdaterade arrayen till local storage
    localStorage.setItem('selectedCourses', JSON.stringify(storedCourses));

    // Sätt courseAdded till true för att visa meddelandet
    this.courseAdded = true;

    // Återställ courseAdded till false efter 2 sekunder
    setTimeout(() => {
      this.courseAdded = false;
    }, 1000);

  }

}


