import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tram } from '../model/tram.model';
import { Router, ActivatedRoute } from '@angular/router';
import { StationService } from '../services/station.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-edit-tram',
  templateUrl: './edit-tram.component.html',
  styleUrls: ['./edit-tram.component.css']
})
export class EditTramComponent implements OnInit {
  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    etat_fonc: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
   });
  currentTram: Tram;
  url: string;

  constructor(private router : Router , private activatedRoute : ActivatedRoute ,
     private stationService : StationService) { }

  ngOnInit(): void {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    this.stationService.getTram(this.url)
      .subscribe(data=>{
        this.currentTram = data;
      },err=>{
        console.log(err);
      })
  }

  onUpdateTram(value : any)
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
      this.router.navigateByUrl("/trams")
      },err=>{
        console.log(err);
      })
  }
}
