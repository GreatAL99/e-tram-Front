import { Association } from './Association.model';
import { Donateur } from './Donateur.model';

export class Publication{
    id_pub : number;
    date_pub : Date;
    content : string;
    etat : boolean;
    type : string;
    evaluation : number;
    association : Association = new Association();
    donateur : Donateur = new Donateur();

}