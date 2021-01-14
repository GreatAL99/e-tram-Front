import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {


  public voyages : any;
  public voyag : any;
  public page : number=0;
  public size : number = 5;
  public ligne : string="";
  public currentPage : number = 0;
  public totalPages : number;
  public pages : Array<number>;




  constructor(private stationService:StationService, private router : Router) { }
   

  ngOnInit(): void {
    this.stationService.getVoyages(this.currentPage,this.size)
    .subscribe(data=>{      
      this.voyages = data;
      this.pages = new  Array( this.voyages.totalPages);
    },err=>{
      console.log(err);
    })

    this.stationService.Voyages()
    .subscribe(data1=>{      
      this.voyag = data1;
    },err1=>{
      console.log(err1);
    })
  }
  onPageVoyage(i)
  {
    this.currentPage = i;
    this.onCherche();
  }

  onChercher(form : any)
  {
    this.currentPage = 0;
    this.ligne = form.ligne;
    this.onCherche();
  }
  onCherche()
  {
    this.stationService.searchVoyage(this.ligne,this.currentPage ,this.size)
    .subscribe(data=>{
      this.voyages = data;
      this.pages = new  Array( this.voyages.totalPages);
      console.log(data);
    },err=>{
      console.log(err);
    })
 }
 onDeleteVoyage(id : number)
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
        this.stationService.deleteVoyage(id)
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
 onEditVoyage(id:number)
 {
   this.router.navigate(['edit-voyage',id]);

 }

}
