import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Horaire } from '../model/horaire.model';
import { Router, ActivatedRoute } from '@angular/router';
import { StationService } from '../services/station.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Station } from '../model/station.model';
import { Voyage } from '../model/voyage.model';
@Component({
  selector: 'app-edit-horaire',
  templateUrl: './edit-horaire.component.html',
  styleUrls: ['./edit-horaire.component.css']
})
export class EditHoraireComponent implements OnInit {
  form = new FormGroup({
    date: new FormControl('', Validators.required),
    heure: new FormControl('', Validators.required),
    id : new FormControl('', Validators.required),
    id_voyage : new FormControl('', Validators.required)
   });

   public stations : any;
   public voyages : any;
   horaire: any;
   idHoraire: number;

  constructor(private router : Router , private activatedRoute : ActivatedRoute ,
  private stationService : StationService) { 
    this.idHoraire = activatedRoute.snapshot.params['id'];
    
  }

  ngOnInit(): void {
    this.stationService.getHoraire(this.idHoraire)
     .subscribe(data=>{
       this.horaire = data;
       console.log(data);
     },err=>{
       console.log(err);
     })

     this.stationService.Voyages()
     .subscribe(data1=>{
       this.voyages = data1;
       console.log(data1);
     },err1=>{
       console.log(err1);
     })

     this.stationService.Stations()
     .subscribe(data2=>{
       this.stations = data2;
       console.log(data2);
     },err2=>{
       console.log(err2);
     })
  }
  onUpdateHoraire()
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre travail a été modifié',
      showConfirmButton: true,
      timer: 2000
    })
    this.stationService.updateHoraire(this.horaire)
   .subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl("/horaires");
   },err=>{
     console.log(err);
   })
  }
  

}
