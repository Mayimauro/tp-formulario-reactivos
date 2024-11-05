import {Component, EventEmitter, inject, Output, output} from '@angular/core';
import {TareaInterface} from '../../interface/tarea.interface';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {normalizeOptionsMiddleware} from '@angular/cli/src/command-builder/utilities/normalize-options-middleware';
import {TareaService} from '../../service/tarea.service';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule

  ],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {

  tareaNueva: TareaInterface ={
    id:0,
    nombre:''
  }

  fb = inject(FormBuilder);
  tareaService = inject(TareaService);

  formulario = this.fb.nonNullable.group(
    {
      id:[0,[Validators.required]],
      nombre:['',[Validators.required,Validators.minLength(3)]]
    }
  );

  @Output() mandarDatos = new EventEmitter<TareaInterface>();
  agregarTarea()
  {

    if(this.formulario.invalid)return;
    const tareaNueva = this.formulario.getRawValue();

    this.mandarDatos.emit(tareaNueva); //la agrego a la lista

    this.agregarTareaJson(tareaNueva); //la guardo en el JSON


    this.formulario.reset()

  }

  agregarTareaJson(tareaAgg: TareaInterface){
    this.tareaService.postTareas(tareaAgg).subscribe(
      {
        next: () =>{
          alert('tarea guardada');
        },
        error:(e)=>{
          console.error(e.message);
        }
      }
    )
  }


}
