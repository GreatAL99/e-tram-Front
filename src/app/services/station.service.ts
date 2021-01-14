import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Station } from '../model/station.model';
import { Horaire } from '../model/horaire.model';
import { map } from 'rxjs/operators';
import { Voyage } from '../model/voyage.model';
import { Tram } from '../model/tram.model';
import { Voyageur } from '../model/voyageur.model';
import { Admin } from '../model/admin.model';
import { Publication } from '../model/publication.model';
import { Voyageur1 } from '../model/voyageur1.model';
import { Voy } from '../model/voy.model';
import { ResGuichet } from '../model/ResGuichet.model';


@Injectable({
  providedIn: 'root'
})
export class StationService {
  public host:string = "http://localhost:8080";

  constructor(private httpClient:HttpClient)
   { }
  public ResGuichet(){
    return this.httpClient.get(this.host+"/listResponsables");
  }
  public Soldes(){
    return this.httpClient.get(this.host+"/listS");
  }
  public Tickets(){
    return this.httpClient.get(this.host+"/listT");
  }
  public Voyageurs(){
    return this.httpClient.get(this.host+"/listVoyageurs");
  }
  public Stations(){
    return this.httpClient.get(this.host+"/listStations");
  }
  public Trams(){
    return this.httpClient.get(this.host+"/listTrams");
  }
  public Horaires(){
    return this.httpClient.get(this.host + "/horaires");
  }
  public Voyages(){
    return this.httpClient.get(this.host + "/voyages");
  }
  public getStations(page : number , size : number){
    return this.httpClient.get(this.host + "/stations?page="+page+"&size="+size);
  }

  public searchStation(mc : string , page : number , size : number)
  {
    return this.httpClient.get(this.host + "/stations/search/byNamePage?mc=" + mc + "&page=" + page + "&size=" + size);
  }
  public deleteStation(url)
  {
    return this.httpClient.delete(url);
  }
  public saveStation(url, data) : Observable<Station>{
      return this.httpClient.post<Station>(url,data);
  }
  public getStation(url) : Observable<Station>{
    return this.httpClient.get<Station>(url);
  }
public editStation(url,data){
  return this.httpClient.put(url,data);
  }

public getHoraires(page:number,size:number){
  return this.httpClient.get(this.host+"/listHoraires?page="+page+"&size="+size);
}

 public searchHoraire(date:string,page:number,size:number){
  return this.httpClient.get(this.host + "/chercher?date="+date+"&page="+page+"&size="+size);
 }

 public saveHoraire(url,horaire:Horaire){
  return this.httpClient.post(url,horaire);
}
public deleteHoraire(id:number)
{
  return this.httpClient.delete(this.host +"/horaires/" + id);
}
public editHoraire(url,data){
  return this.httpClient.put(url,data);
}
updateHoraire(horaire:Horaire){
  return this.httpClient.put(this.host+"/listHoraires/"+horaire.id_horaire,horaire);
}
public getHoraire(id:number){
  return this.httpClient.get(this.host+"/listHoraire/"+id);
}
public getTrams(page : number , size : number){
  return this.httpClient.get(this.host + "/trams?page="+page+"&size="+size);
}

public searchTram(nom : string , page : number , size : number)
{
  return this.httpClient.get(this.host + "/trams/search/chercherTram?nom=" + nom + "&page=" + page + "&size=" + size);
}
public deleteTram(url)
{
  return this.httpClient.delete(url);
}
public saveTram(url, data) : Observable<Tram>{
    return this.httpClient.post<Tram>(url,data);
}
public getTram(url) : Observable<Tram>{
  return this.httpClient.get<Tram>(url);
}
public editTram(url,data){
return this.httpClient.put(url,data);
}
public getVoyages(page:number,size:number){
  return this.httpClient.get(this.host+"/listVoyages?page="+page+"&size="+size);
}

 public searchVoyage(ligne:string,page:number,size:number){
  return this.httpClient.get(this.host + "/chercherVoyage?ligne="+ligne+"&page="+page+"&size="+size);
 }

 public saveVoyage(url,voyage:Voyage){
  return this.httpClient.post(url,voyage);
}
public deleteVoyage(id:number)
{
  return this.httpClient.delete(this.host +"/voyages/" + id);
}
public editVoyage(url,data){
  return this.httpClient.put(url,data);
}
updateVoyage(voyage:Voyage){
  return this.httpClient.put(this.host+"/listVoyages/"+voyage.id_voyage,voyage);
}
public getVoyage(id:number){
  return this.httpClient.get(this.host+"/listVoyages/"+id);
}
public getVoyageurs(page : number , size : number){
  return this.httpClient.get(this.host + "/voyageurs?page="+page+"&size="+size);
}

public searchVoyageur(mc : string , page : number , size : number)
{
  return this.httpClient.get(this.host + "/voyageurs/search/byCinPage?mc=" + mc + "&page=" + page + "&size=" + size);
}
public deleteVoyageur(cin:string)
{
  return this.httpClient.delete(this.host +"/listVoyageurs/" + cin);
}

public verefier(cin:string)
{
  return this.httpClient.get(this.host +"/verefier/" + cin);
}
public assurer(cin:string)
{
  return this.httpClient.get(this.host +"/assurer/" + cin);
}
public verefy(cin:string)
{
  return this.httpClient.get(this.host+"/voyageurs/search/getVoy?cin="+ cin);
}

public nombreTicket(){
  return this.httpClient.get(this.host+"/NbTickets");
}
updateNombre(nb:number){
  return this.httpClient.patch(this.host+"/listVoyageurs?nb="+nb,null);
}
public getTickets(page:number,size:number){
  return this.httpClient.get(this.host+"/listTickets?page="+page+"&size="+size);
}

 public searchTicket(date:string,cin:string,page:number,size:number){
  return this.httpClient.get(this.host + "/chercherT?date="+date+"&cin="+cin+"&page="+page+"&size="+size);
 }

public deleteAfterVal()
{
  return this.httpClient.delete(this.host +"/deleteTickets");
}

updatePrix(prix:number){
  return this.httpClient.patch(this.host+"/listT?prix="+prix,null);
}
public getPrix(){
  return this.httpClient.get(this.host+"/prix");
}

public getNbV(){
  return this.httpClient.get(this.host+"/NbTicketV");
}
public getNbNv(){
  return this.httpClient.get(this.host+"/NbTicketNV");
}
public getSoldes(page:number,size:number){
  return this.httpClient.get(this.host+"/listSoldes?page="+page+"&size="+size);
}
 public searchSolde(cin:string,page:number,size:number){
  return this.httpClient.get(this.host + "/chercherS?cin="+cin+"&page="+page+"&size="+size);
 }

 public sommeByCin(cin:string,date:Date){
  return this.httpClient.get(this.host + "/sommeVt?date="+date+"&cin="+cin);
 }
 public getResponsablesG(page : number , size : number){
  return this.httpClient.get(this.host + "/resGuichets?page="+page+"&size="+size);
}
public searchResponsablesG(mc : string , page : number , size : number)
{
  return this.httpClient.get(this.host + "/resGuichets/search/byCinRPage?mc=" + mc + "&page=" + page + "&size=" + size);
}
public deleteResGuichet(url)
{
  return this.httpClient.delete(url);
}

login(cin:string,password:string){
  return this.httpClient.get(this.host+"/login/"+cin+"&"+password);
  }

isUserLoggedIn() {
  let user = sessionStorage.getItem('cin');
  console.log(sessionStorage.getItem('cin'));
  console.log(sessionStorage.getItem('email'));
  console.log(!(user === null))
  return !(user === null)
}

logOut() {
  sessionStorage.removeItem('cin')
}
getAdminByCin(cin : string){
  return this.httpClient.get(this.host + "/admin2/" + cin);
}
updateAdmin(cin){
  return this.httpClient.put(this.host+"/admin/"+cin,null);
}
updateAdmine(admin:Admin){
  return this.httpClient.put(this.host+"/admin/"+admin.username,admin);
}


public getHorairesByStation(station:String,page:number,size:number){

  return this.httpClient.get(this.host+"/chercherSt?station="+station+"&page="+page+"&size="+size );
 }

 public getHorairesByLigne(ligne:String,page:number,size:number){

  return this.httpClient.get(this.host+"/chercherL?ligne="+ligne+"&page="+page+"&size="+size );
 }
 public getHorairesByLigneStationDate(ligne:String,station:String,date:String,page:number,size:number){

  return this.httpClient.get(this.host+"/chercherH?ligne="+ligne+"&station="+station+"&date="+date+"&page="+page+"&size="+size );
 }


 public getSomme(cin:string){
  return this.httpClient.get(this.host+"/som/"+cin);
}
public getTicketsByCin( cin:string){
  return this.httpClient.get(this.host+"/tickets/"+cin);
}
public acheterT( cin:string,nbTickets:any){
  return this.httpClient.get(this.host+"/acheter/"+cin + "&" + nbTickets);
}
getVoyageurByCin(cin : string){
  return this.httpClient.get(this.host + "/voyageur/" + cin);
}
getNbTicketsByCin(cin : string){
  return this.httpClient.get(this.host + "/nbtickets/" + cin);
}
updateVoyageur(voyageur : Voyageur){
  return this.httpClient.put(this.host+"/updateV/"+voyageur.username,voyageur);
}
public saveVoyageur(url,voyageur:Voyageur1){
  return this.httpClient.post(url,voyageur);
}
public changeMdp(url,voyageur:Voy){
  return this.httpClient.post(url,voyageur);
}
getNbTicketsNvCin(cin : string){
  return this.httpClient.get(this.host + "/NbTicketNvCin/" + cin);
}
getNbTicketsVCin(cin : string){
  return this.httpClient.get(this.host + "/NbTicketVCin/" + cin);
}
getNbTicketsTotal(cin : string){
  return this.httpClient.get(this.host + "/NbTicketTotals/" + cin);
}
AfficherTicketsV(username,page,size){
  return this.httpClient.get(this.host + "/listTicketsVNV?etat_val=true&username=" + username+"&page="+page+"&size="+size);
}


AfficherTicketsNV(username,page,size){
  return this.httpClient.get(this.host + "/listTicketsVNV?etat_val=false&username=" + username+"&page="+page+"&size="+size);
}



//responsable de guichet
alimenterCompte(cin : string,solde:number,cinR:string){
  return this.httpClient.get(this.host + "/alimenter/" + cin+"&"+solde+"&"+cinR);
}
updateRes(res : ResGuichet){
  return this.httpClient.put(this.host+"/updateR/"+res.username,res);
}
getResByCin(cin : string){
  return this.httpClient.get(this.host + "/resGuichet/" + cin);
}
//tram
validerTicket(code:number,cin : string){
  return this.httpClient.get(this.host + "/valider/" + code+"&"+cin);
}

}
