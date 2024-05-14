import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RamschemaService } from '../services/ramschema.service';

@Component({
  selector: 'app-ramschema',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ramschema.component.html',
  styleUrl: './ramschema.component.scss'
})
export class RamschemaComponent {

  coursedata: any[] = [];

  constructor(private ramschemaService: RamschemaService) { }

  ngOnInit(): void {
    // Prenumerera på coursedata
    this.ramschemaService.getCoursedataObservable().subscribe(data => {
      this.coursedata = data;
      // Här kan du göra vad du vill med den uppdaterade coursedatan, t.ex. skriva ut den i HTML

      
    });
  }

}
