import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RamschemaComponent } from './ramschema/ramschema.component';

export const routes: Routes = [
    {path: 'courses', component: CoursesComponent},
    { path: 'ramschema', component: RamschemaComponent},
    {path: '', redirectTo: '/courses', pathMatch: 'full'},
    {path: '404', component: NotFoundComponent},
    {path: '**', component: NotFoundComponent}
];
