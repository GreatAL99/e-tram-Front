import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-horaire',
  templateUrl: './display-horaire.component.html',
  styleUrls: ['./display-horaire.component.css']
})
export class DisplayHoraireComponent implements OnInit {
  public horaires : any;
  public stations:any;
  public voyages:any;
  public horair : any;
  public page : number=0;
  public size : number = 5;
  public date : string="";
  public ligne : string="";
  public station : string="";
  public currentPage : number = 0;
  public totalPages : number;
  public pages : Array<number>;
  public somme : string = "1000"



  constructor(private stationService:StationService, private router : Router) { }

  ngOnInit(): void {
    this.stationService.getHoraires(this.currentPage,this.size)
    .subscribe(data=>{      
      this.horaires = data;
      this.pages = new  Array( this.horaires.totalPages);
      console.log(data);
    },err=>{
      console.log(err);
    })

    this.stationService.Horaires()
    .subscribe(data1=>{      
      this.horair = data1;
    },err1=>{
      console.log(err1);
    })
    this.stationService.Stations()
    .subscribe(data2=>{
         this.stations=data2;
         console.log(data2);
       },err2=>{
           console.log(err2);
         })
    this.stationService.Voyages()
         .subscribe(data3=>{
              this.voyages=data3;
              console.log(data3);
            },err3=>{
                console.log(err3);
              })
       }
  onPageHoraire(i)
  {
    this.currentPage = i;
    this.ChercherParLigneStationDate();
  }

 onChercherH(form:any){

  this.currentPage=0;
  this.date=form.date;
  this.ligne=form.ligne;
  this.station=form.station;
  this.ChercherParLigneStationDate();
} 
ChercherParLigneStationDate(){
  this.stationService.getHorairesByLigneStationDate(this.ligne,this.station,this.date,this.currentPage,this.size)
  .subscribe(data=>{
    this.horaires=data;
    this.pages = new  Array( this.horaires.totalPages);
    console.log(data);
  },err=>{
      console.log(err);
    });
}
}
