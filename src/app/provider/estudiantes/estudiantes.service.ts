import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EstudiantesModel, GetAllStudents} from '../../models/estudiantes/estudiantes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  public data: Array<EstudiantesModel>;
  public url = 'https://run.mocky.io/v3/412eae77-3559-4a34-8b4b-873b31720506';
  public http: HttpClient;

  constructor(http: HttpClient) {
      this.http = http;
  }

  public getStudents(): Observable<GetAllStudents> {
    return this.http.get<GetAllStudents>(this.url);
  }

}
