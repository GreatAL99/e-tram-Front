import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { StationService } from '../services/station.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  form = new FormGroup({
    cin: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required)
   });
  public cin : any;
  public nom : any;
  public prenom : any;
  public email : any;
  public tel : any;
  public adresse : any;
  public fonction : any;
  public admin : any;

  constructor(private stationService : StationService) { }

  ngOnInit(): void {
    
    this.cin = sessionStorage.getItem('cin');
    this.nom = sessionStorage.getItem('nom');
    this.prenom = sessionStorage.getItem('prenom');
    this.adresse = sessionStorage.getItem('adresse');
    this.email = sessionStorage.getItem('email');
    this.tel = sessionStorage.getItem('tel');
    this.fonction = sessionStorage.getItem('fonction');

    this.stationService.getAdminByCin(this.cin)
    .subscribe(data=>{
      this.admin = data;
      console.log(data);
    },err=>{
      console.log(err);
    })
  }
  update()
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre travail a été modifié',
      showConfirmButton: true,
      timer: 2000
    })
    this.stationService.updateAdmine(this.admin)
      .subscribe(data=>{
        console.log(data);
        console.log(this.cin);
      },err=>{
        console.log(err);
      })
  }
}
