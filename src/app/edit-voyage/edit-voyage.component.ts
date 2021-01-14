import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StationService } from '../services/station.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-edit-voyage',
  templateUrl: './edit-voyage.component.html',
  styleUrls: ['./edit-voyage.component.css']
})
export class EditVoyageComponent implements OnInit {
  form = new FormGroup({
    ligne: new FormControl('', Validators.required),
    id_tram: new FormControl('', Validators.required)

   });

   public trams : any;
   voyage: any;
   idVoyage: number;

  constructor(private router : Router , private activatedRoute : ActivatedRoute ,
  private stationService : StationService) { 
    this.idVoyage = activatedRoute.snapshot.params['id'];
    
  }

  ngOnInit(): void {
    this.stationService.getVoyage(this.idVoyage)
     .subscribe(data=>{
       this.voyage = data;
       console.log(data);
     },err=>{
       console.log(err);
     })

     this.stationService.Trams()
     .subscribe(data=>{
       this.trams = data;
       console.log(data);
     },err=>{
       console.log(err);
     })
  }
  onUpdateVoyage()
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre travail a été modifié',
      showConfirmButton: true,
      timer: 2000
    })
    this.stationService.updateVoyage(this.voyage)
   .subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl("/voyages");
   },err=>{
     console.log(err);
   })
  }
  

}
