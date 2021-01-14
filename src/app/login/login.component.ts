import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    cin: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
   });
 
   account:any;
   mode:number=0;
   errorMessage:string;
 
  constructor(private service : StationService , private router : Router) { }

  ngOnInit(): void {
  }
  checkLogin(form:any) {
    this.service.login(form.cin, form.password)
    .subscribe(data=>{
      this.account=data;
      console.log(data);
      sessionStorage.setItem('cin', form.cin);
      sessionStorage.setItem('nom', this.account.nom);
      sessionStorage.setItem('prenom', this.account.prenom);
      sessionStorage.setItem('role', this.account.role);
      sessionStorage.setItem('adresse', this.account.adresse);
      sessionStorage.setItem('email', this.account.email);
      sessionStorage.setItem('tel', this.account.tel);
      sessionStorage.setItem('password', this.account.password);
      this.mode=1;
      if(sessionStorage.getItem('role') == "admin"){
        this.router.navigateByUrl("/stations");
      }
      if(sessionStorage.getItem('role') == "voyageur"){
        sessionStorage.setItem('tramSolde', this.account.tramSolde);
        sessionStorage.setItem('nbTickets', this.account.nbTickets);
        this.router.navigateByUrl("/depenses");
      }
      if(sessionStorage.getItem('role') == "respo"){
        sessionStorage.setItem('date', this.account.date);
        this.router.navigateByUrl("/alimenter");
      }
      if(sessionStorage.getItem('role') == "tram"){
        this.router.navigateByUrl("/valider");
      }
    },err=>{
      this.errorMessage=err.error.message;
      this.mode=0;
    })
}
}