import { Horaire } from './horaire.model';
import { Voyageur } from './voyageur.model';

export class Ticket{
    id_ticket : number;
    etat_val : boolean;
    code_val : number;
    prix : number;
    horaire : Horaire = new Horaire();
    voyageur : Voyageur = new Voyageur();

}