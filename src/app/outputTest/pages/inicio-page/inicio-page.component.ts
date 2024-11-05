import { Component } from '@angular/core';
import {ListTareaComponent} from '../../components/list-tarea/list-tarea.component';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [
    ListTareaComponent
  ],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

}
