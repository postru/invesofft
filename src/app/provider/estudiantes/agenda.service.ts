import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AgendaModel, GetAllAgenda } from '../../models/estudiantes/agenda.model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  public data: Array<AgendaModel>;
  public url = 'https://invessoft.com/api/eventos/2';
  public http: HttpClient;

  constructor(http: HttpClient) {
      this.http = http;
  }

  public getAgenda(): Observable<GetAllAgenda> {
    return this.http.get<GetAllAgenda>(this.url);
  }

}