import { Time } from '@angular/common';
import { Station } from './station.model';
import { Voyage } from './voyage.model';

export class Horaire{
    id_horaire : number;
    date : string="";
    heure : string="";
    station : Station = new Station();
    voyage : Voyage = new Voyage();

}