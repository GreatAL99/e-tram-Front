import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StationService } from '../services/station.service';
import { Station } from '../model/station.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-edit-station',
  templateUrl: './edit-station.component.html',
  styleUrls: ['./edit-station.component.css']
})
export class EditStationComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required)
    
   });
  currentStation: Station;
  url: string;

  constructor(private router : Router , private activatedRoute : ActivatedRoute ,
     private stationService : StationService) { }

  ngOnInit(): void {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    this.stationService.getStation(this.url)
      .subscribe(data=>{
        this.currentStation = data;
      },err=>{
        console.log(err);
      })
  }

  onUpdateStation(value : any)
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre travail a été modifié',
      showConfirmButton: true,
      timer: 2000
    })
    this.stationService.editStation(this.url,value)
      .subscribe(data=>{
      this.router.navigateByUrl("/stations")
      },err=>{
        console.log(err);
      })
  }
}
