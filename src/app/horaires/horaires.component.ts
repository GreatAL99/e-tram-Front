import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StationService } from '../services/station.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.css']
})
export class HorairesComponent implements OnInit {
  public horaires : any;
  public horair : any;
  public page : number=0;
  public size : number = 5;
  public date : string="";
  public currentPage : number = 0;
  public totalPages : number;
  public pages : Array<number>;
  public somme : string = "1000"



  constructor(private stationService:StationService, private router : Router) { }

  ngOnInit(): void {
    this.stationService.getHoraires(this.currentPage,this.size)
    .subscribe(data=>{      
      this.horaires = data;
      this.pages = new  Array( this.horaires.totalPages);
      console.log(data);
    },err=>{
      console.log(err);
    })

    this.stationService.Horaires()
    .subscribe(data1=>{      
      this.horair = data1;
    },err1=>{
      console.log(err1);
    })
  }
  onPageHoraire(i)
  {
    this.currentPage = i;
    this.onCherche();
  }

  onChercher(form : any)
  {
    this.currentPage = 0;
    this.date = form.date;
    this.onCherche();
  }
  onCherche()
  {
    this.stationService.searchHoraire(this.date,this.currentPage ,this.size)
    .subscribe(data=>{
      this.horaires = data;
      this.pages = new  Array( this.horaires.totalPages);
      console.log(data);
    },err=>{
      console.log(err);
    })
 }
 onDeleteHoraire(id : number)
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
        this.stationService.deleteHoraire(id)
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
 onEditHoraire(id:number)
 {
   this.router.navigate(['edit-horaire',id]);

 }

}
