import { Component } from '@angular/core';
import { Coursedata } from '../model/coursedata';
import { CoursedataService } from '../services/coursedata.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  coursedatalist: Coursedata[] = [];

  constructor(private coursedataservice : CoursedataService) {}

  ngOnInit() {
    this.coursedataservice.getCoursedata().subscribe(data => {
      this.coursedatalist = data;
    })
  }
}
