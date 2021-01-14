import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { NgStyle } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResGuichet } from '../model/ResGuichet.model';

@Component({
  selector: 'app-alimenter',
  templateUrl: './alimenter.component.html',
  styleUrls: ['./alimenter.component.css']
})
export class AlimenterComponent implements OnInit {


  constructor(private service:StationService) { }

  cinV : string;
  somme : number;
  cin : any;
  nom : any;
  prenom : any;
  role : any;
  adresse : any;
  email : any;
  tel : any;
  password : any;
  date : any;
  mode:number=0;
  mode2 : number=0;
  errorMessage:string;
  res : any;

  form = new FormGroup({
    cinV: new FormControl('', Validators.required),
    somme: new FormControl('', [Validators.required,Validators.min(10 )])
  })
  form2 = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required)

  })

  ngOnInit(): void {
    this.cin = sessionStorage.getItem('cin');
    this.nom = sessionStorage.getItem('nom');
    this.prenom = sessionStorage.getItem('prenom');
    this.role = sessionStorage.getItem('role');
    this.adresse = sessionStorage.getItem('adresse');
    this.email = sessionStorage.getItem('email');
    this.tel = sessionStorage.getItem('tel');
    this.password = sessionStorage.getItem('password');
    this.date = sessionStorage.getItem('date');

    this.service.getResByCin(this.cin)
    .subscribe(data=>{
      this.res = data as object;
      console.log(data);
    },err=>{
      console.log(err);
    })
  }
  alimenter(cinV,somme){
    this.service.alimenterCompte(cinV,somme,this.cin)
    .subscribe(data=>{
      console.log(data);
      this.mode = 1;
    },err=>{
      console.log(err);
      this.errorMessage=err.error.message;
      this.mode=0;
    }
    )
  }
  public updateR(){
    this.service.updateRes(this.res)
    .subscribe(data=>{
      this.mode2=1;
      console.log(data);
    },err=>{
      console.log(err);
    })
  }
}
