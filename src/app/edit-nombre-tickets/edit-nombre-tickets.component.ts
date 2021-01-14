import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StationService } from '../services/station.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-edit-nombre-tickets',
  templateUrl: './edit-nombre-tickets.component.html',
  styleUrls: ['./edit-nombre-tickets.component.css']
})
export class EditNombreTicketsComponent implements OnInit {
  form = new FormGroup({
    nombreTickets: new FormControl('', Validators.required)

   });

   voyageur: any;
   nombre : number;


  constructor(private router : Router , private activatedRoute : ActivatedRoute ,
  private stationService : StationService) { 

    
  }

  ngOnInit(): void {
    this.stationService.nombreTicket()
     .subscribe(data=>{
       this.voyageur = data;
       console.log(data);
     },err=>{
       console.log(err);
     })

   
  }
  onUpdateVoyageur(nb:number)
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre travail a été modifié',
      showConfirmButton: true,
      timer: 2000
    })
    this.stationService.updateNombre(nb)
   .subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl("/voyageurs");
   },err=>{
     console.log(err);
   })
  }
  

}