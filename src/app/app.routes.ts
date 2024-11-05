import { Routes } from '@angular/router';
import {InicioPageComponent} from './outputTest/pages/inicio-page/inicio-page.component';
import {TareaPageComponent} from './outputTest/pages/tarea-page/tarea-page.component';
import {UpdateTareaPageComponent} from './outputTest/pages/update-tarea-page/update-tarea-page.component';

export const routes: Routes = [
  {path:'',component: InicioPageComponent},
  {path:'agregarTarea', component: TareaPageComponent},
  {
    path:'update/:id',component: UpdateTareaPageComponent
  }
];
