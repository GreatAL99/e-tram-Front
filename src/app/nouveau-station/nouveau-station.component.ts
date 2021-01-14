import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
 import 'sweetalert2/src/sweetalert2.scss';
import { Router } from '@angular/router';
import { StationService } from '../services/station.service';
@Component({
  selector: 'app-nouveau-station',
  templateUrl: './nouveau-station.component.html',
  styleUrls: ['./nouveau-station.component.css']
})
export class NouveauStationComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required)
   });

  constructor(private stationService : StationService, private router : Router) { }

  ngOnInit(): void {
  }
  onSaveStation(data : any)
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre travail a été enregistré',
      showConfirmButton: true,
      timer: 2000
    })
    this.stationService.saveStation(this.stationService.host + "/stations",data)
    .subscribe(res=>{
     // this.router.navigateByUrl("/stations");
     //this.currentStation = res;
     this.router.navigateByUrl("/stations");
    },err=>{
      console.log(err);
    })
  }
}