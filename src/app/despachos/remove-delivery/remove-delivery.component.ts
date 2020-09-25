import { Component, OnInit } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import {AgendaService} from '../../provider/estudiantes/agenda.service';
import { AgendaModel} from '../../models/estudiantes/agenda.model';

@Component({
  selector: 'app-remove-delivery',
  templateUrl: './remove-delivery.component.html',
  styleUrls: ['./remove-delivery.component.scss']
})
export class RemoveDeliveryComponent implements OnInit {

  public data: Array<AgendaModel>;

  constructor(private agendaService: AgendaService, // private toastr: ToastrService
              ) { }

  /*ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }*/

  ngOnInit() {
    this.indexAgenda();
  }

  indexAgenda() {
    this.agendaService.getAgenda()
    .subscribe(result =>  {
      console.log(result);
      this.data = result.agenda;
      // this.toastr.success('Hello world!', 'Toastr fun!');
    }, errors => {
      console.log('error');
      /*this.toastr.error('everything is broken', 'Major Error', {
        timeOut: 3000,
      });*/
    });
  }

  /*conversion: any;
  rta:[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://invessoft.com/api/eventos/2')
    .subscribe(data => { 
    this.conversion=data;
    this.rta=this.conversion;
     console.log('prueba', this.rta);
    });
  }*/
}
