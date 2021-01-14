import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soldes',
  templateUrl: './soldes.component.html',
  styleUrls: ['./soldes.component.css']
})
export class SoldesComponent implements OnInit {

  public soldes : any;
  public solde : any;
  public page : number=0;
  public size : number = 5;
  public cin : string;
  public currentPage : number = 0;
  public totalPages : number;
  public pages : Array<number>;
  public voyageurs:any;
  public resguichet:any;
  public somme ;
  public number=0;


  constructor(private stationService:StationService, private router : Router) { 

  }

  ngOnInit(): void {
    this.stationService.ResGuichet()
    .subscribe(data=>{
      this.resguichet = data;
    },err=>{
      console.log(err);
    })


    this.stationService.getSoldes(this.currentPage,this.size)
    .subscribe(data=>{      
      this.soldes = data;
      this.pages = new  Array( this.soldes.totalPages);
      console.log(data);
    },err=>{
      console.log(err);
    })

  }




  onPageSoldes(i)
  {
    this.currentPage = i;
    this.onCherche();
  }

  chercherSolde(form : any)
  {
    this.currentPage = 0;
    this.cin = form.cin;
    this.onCherche();
  }
  onCherche()
  {
    this.stationService.searchSolde(this.cin,this.currentPage ,this.size)
    .subscribe(data=>{
      this.soldes = data;
      this.pages = new  Array( this.soldes.totalPages);
      console.log(data);
    },err=>{
      console.log(err);
    })

  }

  getSommeByCin(form : any){
    this.stationService.sommeByCin(form.cin,form.date)
    .subscribe(data=>{
      this.somme = data as number;
      console.log(data);
    },err=>{
      console.log(err);
    })
  }

}
