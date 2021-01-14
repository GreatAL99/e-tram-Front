import { Tram } from './tram.model';

export class Voyage{
    id_voyage : number;
    ligneTram : string;
    tram : Tram = new Tram();
}