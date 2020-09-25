import { Component, OnInit, AfterViewInit } from '@angular/core';
import {EstudiantesService} from '../../provider/estudiantes/estudiantes.service';
import { EstudiantesModel} from '../../models/estudiantes/estudiantes.model';
import {AgendaService} from '../../provider/estudiantes/agenda.service';
import { AgendaModel} from '../../models/estudiantes/agenda.model';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.scss']
})
export class AddDeliveryComponent implements OnInit, AfterViewInit {


  public data: Array<AgendaModel>;

  constructor(private agendaService: AgendaService) { }

  ngAfterViewInit(): void {
    
  }

  ngOnInit() {
    this.indexAgenda();
  }

  indexAgenda() {
    this.agendaService.getAgenda()
    .subscribe(result =>  {
      console.log(result);
      this.data = result.agenda;
    }, errors => {
      console.log('error');
    });
  }

}
