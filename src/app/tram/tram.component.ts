import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-tram',
  templateUrl: './tram.component.html',
  styleUrls: ['./tram.component.css']
})
export class TramComponent implements OnInit {
  public trams : any;
  public size : number = 5;
  public currentPage : number = 0;
  public totalPages : number;
  public pages : Array<number>;
  public nom : string;
  public currentKeyword : string ="";

  constructor(private stationService : StationService , private router : Router) { }

  ngOnInit(): void {
    this.stationService.getTrams(this.currentPage,this.size)
     .subscribe(data=>{
       this.trams = data;
       this.totalPages = data["page"].totalPages;
       this.pages = new  Array<number>(this.totalPages);
     },err=>{
       console.log(err);
     })
  }

/*  onGetStations()
  {
     this.stationService.getStations(this.currentPage,this.size)
     .subscribe(data=>{
       this.stations = data;
       this.totalPages = data["page"].totalPages;
       this.pages = new  Array<number>(this.totalPages);
     },err=>{
       console.log(err);
     })
  }
  */
  onTramPage(i)
  {
    this.currentPage = i;
    this.onCherche();
  }

  onChercher(form : any)
  {
    this.currentPage = 0;
    this.currentKeyword = form.keyword;
    this.onCherche();
  }
  onCherche()
  {
    this.stationService.searchTram(this.currentKeyword,this.currentPage ,this.size)
    .subscribe(data=>{
      this.trams = data;
      this.totalPages = data["page"].totalPages;
      this.pages = new  Array<number>(this.totalPages);
    },err=>{
      console.log(err);
    })
 }
 onDeleteTram(t)
 {
  Swal.fire({
    title: 'Etes-vous sûr?',
    text: 'Vous ne pourrez pas récupérer ce fichier !',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimez-le',
    cancelButtonText: 'Non, garde-le'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Effacé!',
        'Votre fichier a été supprimé.',
        'success',
        this.stationService.deleteTram(t._links.self.href)
        .subscribe(data=>{
          this.onCherche();
        },err=>{
          console.log(err);
        })
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Annulé',
        'Votre fichier  est sécurisé :)',
        'error'
      )
    }
  })
 }
 onEditTram(t)
 {
   let url = t._links.self.href;
   this.router.navigateByUrl("/edit-tram/"+btoa(url));
 }
}
