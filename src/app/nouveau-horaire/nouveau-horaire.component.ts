import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StationService } from '../services/station.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
 import 'sweetalert2/src/sweetalert2.scss';
import { Horaire } from '../model/horaire.model';
import { Station } from '../model/station.model';
import { Voyage } from '../model/voyage.model';

@Component({
  selector: 'app-nouveau-horaire',
  templateUrl: './nouveau-horaire.component.html',
  styleUrls: ['./nouveau-horaire.component.css']
})
export class NouveauHoraireComponent implements OnInit {
  form = new FormGroup({
    date: new FormControl('', Validators.required),
    heure: new FormControl('', Validators.required),
    id : new FormControl('', Validators.required),
    id_voyage : new FormControl('', Validators.required)
   });
  horaire : Horaire = new Horaire();
  public stations : any;
  public voyages : any;
 
 
 

  constructor(private stationService : StationService, private router : Router) { }

  ngOnInit(): void {
      this.stationService.Stations()
     .subscribe(data=>{
       console.log(data);
       this.stations = data;
     },err=>{
       console.log(err);
     })

     this.stationService.Voyages()
     .subscribe(data1=>{
       this.voyages = data1;
     },err1=>{
       console.log(err1);
     })

    }
  
  onSaveHoraire()
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre travail a été enregistré',
      showConfirmButton: true,
      timer: 2000
    })
    this.stationService.saveHoraire(this.stationService.host + "/listHoraires",this.horaire)
    .subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("/horaires");
    },err=>{
      console.log(err);
    })
   
  }
   

   

  

}
