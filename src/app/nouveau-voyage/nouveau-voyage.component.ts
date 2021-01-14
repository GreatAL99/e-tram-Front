import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Voyage } from '../model/voyage.model';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-nouveau-voyage',
  templateUrl: './nouveau-voyage.component.html',
  styleUrls: ['./nouveau-voyage.component.css']
})
export class NouveauVoyageComponent implements OnInit {
  form = new FormGroup({
    ligne: new FormControl('', Validators.required),
    id_tram: new FormControl('', Validators.required),

   });
  voyage : Voyage = new Voyage();
  public trams : any;

 
 
 

  constructor(private stationService : StationService, private router : Router) { }

  ngOnInit(): void {
      this.stationService.Trams()
     .subscribe(data=>{
       console.log(data);
       this.trams = data;
     },err=>{
       console.log(err);
     })
    }
  
  onSaveVoyage()
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre travail a été enregistré',
      showConfirmButton: true,
      timer: 2000
    })
    this.stationService.saveVoyage(this.stationService.host + "/listVoyages",this.voyage)
    .subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("/voyages");
    },err=>{
      console.log(err);
    })
   
  }
   

   

  

}
