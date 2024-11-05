import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TareaPageComponent} from './outputTest/pages/tarea-page/tarea-page.component';
import {NavBarComponent} from './outputTest/shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareaPageComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulariosReactvios';
}
