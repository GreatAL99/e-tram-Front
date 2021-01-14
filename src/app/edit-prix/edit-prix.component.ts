import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StationService } from '../services/station.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-edit-prix',
  templateUrl: './edit-prix.component.html',
  styleUrls: ['./edit-prix.component.css']
})
export class EditPrixComponent implements OnInit {
  form = new FormGroup({
    prix: new FormControl('', Validators.required)

   });

   ticket: any;
   prix : number;


  constructor(private router : Router , private activatedRoute : ActivatedRoute ,
  private stationService : StationService) { 

    
  }

  ngOnInit(): void {
    this.stationService.getPrix()
     .subscribe(data=>{
       this.ticket = data;
       console.log(data);
     },err=>{
       console.log(err);
     })

   
  }
  onUpdateTicket(prix:number)
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre travail a été modifié',
      showConfirmButton: true,
      timer: 2000
    })
    this.stationService.updatePrix(prix)
   .subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl("/tickets");
   },err=>{
     console.log(err);
   })
  }
  

}