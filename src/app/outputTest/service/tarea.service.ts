import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TareaInterface} from '../interface/tarea.interface';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  urlBase = environment.urlBase;

  /* peticion get */
  getTareas(): Observable<TareaInterface[]> {
    return this.http.get<TareaInterface[]>(this.urlBase)
  }
  /*petecion por id*/
  getTareaById(id: string): Observable<TareaInterface> {
    return this.http.get<TareaInterface>(`${this.urlBase}/${id}`);
  }

  /*peticion post*/
  postTareas(tarea: TareaInterface): Observable<TareaInterface> {
    return this.http.post<TareaInterface>(this.urlBase, tarea);
  }
  /*putTareas*/
  putTareas(tarea: TareaInterface): Observable<TareaInterface> {
    return this.http.put<TareaInterface>(`${this.urlBase}`, tarea);
  }
  /*borrar tarea*/
  deleteTareaById(id: string | null): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${id}`);
  }


}
