import { Time } from '@angular/common';

export class AgendaModel {

    public id_trabajo_agenda?: number; // pk - autoincremente
    public fecha?: Date; 
    public hora_inicio?: Time;
    public hora_fin?: Time;
    public id_espacio?: number;
    public id_trabajo?: number;
    public espacio?:any;
    public trabajo?: any;
    public trabajos_agendas_evaluadores?: any;

    constructor(raw: any) {
        if (raw.hasOwnProperty('id_trabajo_agenda')) {
            this.id_trabajo_agenda = raw.id_trabajo_agenda;
        }
        if (raw.hasOwnProperty('id')) {
            this.fecha = raw.fecha;
        }
        if (raw.hasOwnProperty('hora_inicio')) {
            this.hora_inicio = raw.hora_inicio;
        }
        if (raw.hasOwnProperty('hora_fin')) {
            this.hora_fin = raw.hora_fin;
        }
        if (raw.hasOwnProperty('id_espacio')) {
            this.id_espacio = raw.id_espacio;
        }
        if (raw.hasOwnProperty('id_trabajo')) {
            this.id_trabajo = raw.id_trabajo;
        }
        if (raw.hasOwnProperty('espacio')) {
            this.espacio = raw.espacio;
        }
        if (raw.hasOwnProperty('espacio')) {
            this.espacio.id_espacio = raw.espacio.id_espacio;
        }
        if (raw.hasOwnProperty('espacio')) {
            this.espacio.descripcion = raw.espacio.descripcion;
        }
        if (raw.hasOwnProperty('campus')) {
            this.espacio.campus = raw.espacio.campus;
        }
        if (raw.hasOwnProperty('trabajo')) {
            this.trabajo = raw.trabajo;
        }
        if (raw.hasOwnProperty('trabajos_agendas_evaluadores')) {
            this.trabajos_agendas_evaluadores = raw.trabajos_agendas_evaluadores;
        }
    }
}

export class GetAllAgenda {
    public count: number;
    public agenda: AgendaModel[];
    constructor(raw: any) {
        if (raw.hasOwnProperty('count')) {
            this.count = raw.count;
        }
        if (raw.hasOwnProperty('agenda') && Array.isArray(raw.agenda)) {
            this.agenda = raw.agenda.map((agenda: any) => {

                return new AgendaModel(agenda);
            });
        }
    }
}