import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';
import { Voyageur } from '../model/voyageur.model';
import { Voyageur1 } from '../model/voyageur1.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mode:number=0;
  errorMessage:string;
  voyageur : Voyageur1 =  new Voyageur1();
  form = new FormGroup({
    cin: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repassword: new FormControl('', Validators.required)
   });
  constructor(private stationService:StationService, private router : Router) { }

  ngOnInit(): void {
  }
  onSaveVoyageur()
  {

    this.stationService.saveVoyageur(this.stationService.host + "/lista",this.voyageur)
    .subscribe(data=>{
      console.log(data);
      this.mode=1;
      this.router.navigateByUrl("/login");
    },err=>{
      console.log(err);
      this.errorMessage=err.error.message;
      this.mode=0;
    })
   
  }

}
