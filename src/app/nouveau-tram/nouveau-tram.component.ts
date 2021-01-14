import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-nouveau-tram',
  templateUrl: './nouveau-tram.component.html',
  styleUrls: ['./nouveau-tram.component.css']
})
export class NouveauTramComponent implements OnInit {
  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    etat_fonc: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
   });

  constructor(private stationService : StationService, private router : Router) { }

  ngOnInit(): void {
  }
  onSaveTram(data : any)
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre travail a été enregistré',
      showConfirmButton: true,
      timer: 2000
    })
    this.stationService.saveTram(this.stationService.host + "/trams",data)
    .subscribe(res=>{
     // this.router.navigateByUrl("/stations");
     //this.currentStation = res;
     this.router.navigateByUrl("/trams");
    },err=>{
      console.log(err);
    })
  }
}