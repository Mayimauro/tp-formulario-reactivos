import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {TareaService} from '../../service/tarea.service';
import {ActivatedRoute} from '@angular/router';
import {TareaInterface} from '../../interface/tarea.interface';

@Component({
  selector: 'app-update-tarea',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './update-tarea.component.html',
  styleUrl: './update-tarea.component.css'
})
export class UpdateTareaComponent implements OnInit{

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
        this.getTareaDelJson(this.id);
      },
      error: (e: Error) => {
        console.log(e.message);
      }
    })
  }

  id: string | null = null

  fb = inject(FormBuilder);
  tareaservice = inject(TareaService);



  formulario = this.fb.group({
    id:['',Validators.required],
    tarea:['',Validators.required]
  });

  activatedRoute = inject(ActivatedRoute);


  getTareaDelJson(id: string | null) {
    this.tareaservice.getTareaById(id).subscribe({
      next: (tarea: TareaInterface)=>{
        this.formulario.controls['id'].setValue(tarea.id)
        this.formulario.controls['tarea'].setValue(tarea.nombre)
      },error:(e)=>{
        console.log(e.message);
      }
    })

  }








}
