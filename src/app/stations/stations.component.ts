import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  public cin : any;
  public nom : any;
  public stations : any;
  public size : number = 5;
  public currentPage : number = 0;
  public totalPages : number;
  public pages : Array<number>;
  public mc : string;
  public currentKeyword : string ="";

  constructor(private stationService : StationService , private router : Router) { }

  ngOnInit(): void {
   
    this.stationService.getStations(this.currentPage,this.size)
     .subscribe(data=>{
       this.stations = data;
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
  onStationPage(i)
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
    this.stationService.searchStation(this.currentKeyword,this.currentPage ,this.size)
    .subscribe(data=>{
      this.stations = data;
      this.totalPages = data["page"].totalPages;
      this.pages = new  Array<number>(this.totalPages);
    },err=>{
      console.log(err);
    })
 }

 onDeleteStation(s)
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
        this.stationService.deleteStation(s._links.self.href)
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
 onEditStation(s)
 {
   let url = s._links.self.href;
   this.router.navigateByUrl("/edit-station/"+btoa(url));
 }
}
