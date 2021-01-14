import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-valider-ticket',
  templateUrl: './valider-ticket.component.html',
  styleUrls: ['./valider-ticket.component.css']
})
export class ValiderTicketComponent implements OnInit {
  form = new FormGroup({
    code: new FormControl('',Validators.required)
  })

mode : number = 0;
cin : any;
errorMessage:string;
  constructor(private service :StationService) { }

  ngOnInit(): void {
    this.cin = sessionStorage.getItem('cin');
  }
validerTicket(form:any){
  this.service.validerTicket(form.code,this.cin)
  .subscribe(data=>{
    console.log(data);
    this.mode=1;
  },err=>{
    console.log(err);
    this.errorMessage=err.error.message;
    this.mode=0;
  }
  )
}
}
