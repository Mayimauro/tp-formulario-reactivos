import {Component, inject, OnInit} from '@angular/core';
import {TareaInterface} from '../../interface/tarea.interface';
import {AddTareaComponent} from '../add-tarea/add-tarea.component';
import {TareaService} from '../../service/tarea.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [
    AddTareaComponent,
    RouterLink
  ],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})
export class ListTareaComponent implements OnInit{

  listaTareas: TareaInterface[] =[]

  agregarALista(tareaNueva: TareaInterface){
    this.listaTareas.push(tareaNueva);
  }

  tareaService = inject(TareaService);



  protected readonly indexedDB = indexedDB;

  ngOnInit(): void {
    this.traerTareasDeJSON();
  }

  traerTareasDeJSON(){
    this.tareaService.getTareas().subscribe(
      {
        next: (tareas: TareaInterface[])=>{
          this.listaTareas = tareas;
        },
        error:(e)=>{
          console.log(e.message)
        }
      })
  }

  borrarTarea(id: number){
    if (id === undefined) {
      console.log("ID no válido");
      return;
    }
    this.tareaService.deleteTareaById(id).subscribe(
      {
        next: ()=>{
          console.log('actualizado');
        },
        error:(e)=>{
          console.log('no se encontro la tarea',e.message)
        }
      }
    );
  }




}
