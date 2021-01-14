import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationService } from '../services/station.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent implements OnInit {
  form2= new FormGroup({
    nbTi: new FormControl('', Validators.required)
  });
  
  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required)
   });
  somme : number;
  nbTi : any;
  station : any;
  date : any;
  voyageur : any;
  stations : any;
  cin : any;
  nom : any;
  prenom : any;
  role : any;
  adresse : any;
  email : any;
  tel : any;
  mode:number=0;
  errorMessage:string;
  tramSolde : any;
  nbTickets : any;
  tickets :any;
  ticketsV :any;
  ticketsNV :any;
  nb : number;
  nv:number;
  v:number;
  total:number;
  mod = 0;
  public currentPage : number = 0;
  public currentPageNV : number = 0;
  public size : number = 5;
  public pagesV : Array<number>;
  public pagesNV : Array<number>;

  constructor(private stationService:StationService, private router : Router) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {

    this.cin = sessionStorage.getItem('cin');
    this.nom = sessionStorage.getItem('nom');
    this.prenom = sessionStorage.getItem('prenom');
    this.role = sessionStorage.getItem('role');
    this.adresse = sessionStorage.getItem('adresse');
    this.email = sessionStorage.getItem('email');
    this.tel = sessionStorage.getItem('tel');
    this.tramSolde = sessionStorage.getItem('tramSolde');
    this.nbTickets = sessionStorage.getItem('nbTickets');

    this.stationService.getSomme(this.cin)
    .subscribe(data=>{
      this.somme = data as number;
      console.log(data);
    },err=>{
      console.log(err);
        })

      this.stationService.getNbTicketsByCin(this.cin)
      .subscribe(data=>{
         this.nb = data as number;
         console.log(this.nb)
        },err=>{
          console.log(err);
        })
        
   this.stationService.AfficherTicketsV(this.cin,this.currentPage,this.size)
   .subscribe(data=>{
     this.ticketsV = data;
     console.log(data);
     this.pagesV = new  Array( this.ticketsV.totalPages);
     console.log(data);
   },err=>{
     console.log(err);
   })

   this.stationService.AfficherTicketsNV(this.cin,this.currentPageNV,this.size)
   .subscribe(data=>{
     this.ticketsNV = data;
     this.pagesNV = new  Array( this.ticketsNV.totalPages);
     console.log(data);
   },err=>{
     console.log(err);
   })

   this.stationService.getVoyageurByCin(this.cin)
   .subscribe(data=>{
     this.voyageur = data;
     console.log(data);
   },err=>{
     console.log(err);
   })
   this.stationService.Stations()
    .subscribe(data2=>{
         this.stations=data2;
         console.log(data2);
       },err2=>{
           console.log(err2);
         })


         this.stationService.getNbTicketsVCin(this.cin)
         .subscribe(data3=>{
           this.v = data3 as number;
           this.pieChartData.push(this.v);
         },err=>{
           console.log(err);
         }) 
     
         this.stationService.getNbTicketsNvCin(this.cin)
         .subscribe(data2=>{
           this.nv = data2 as number;
           this.pieChartData.push(this.nv);
         },err=>{
           console.log(err);
         })

         this.stationService.getNbTicketsTotal(this.cin)
         .subscribe(data4=>{
           this.total = data4 as number;
         },err4=>{
           console.log(err4);
         })
  
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public pieChartLabels: Label[] = [['Nb tickets validés'],['Nb tickets non validés'] ];
  public pieChartData: Array<number> =[];
  public chartColors: Array<any> = [
    {
      backgroundColor: [ 'red','green'],
      hoverBackgroundColor: ['red','green'],
      borderWidth: 2,
    }
  ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  onPageTicketsV(i)
  {
    this.currentPage = i;
    this.ngOnInit();
  }

  onPageTicketsNV(i)
  {
    this.currentPageNV = i;
    this.ngOnInit();
  }


  onAchete(form2 : any){
    this.nbTi = form2.nbTi;;
    this.date = form2.date;
    this.station = form2.station;
    this.acheterTicket()
  }
public acheterTicket(){
  this.stationService.acheterT(this.cin,this.nbTi)
  .subscribe(data=>{
    console.log(data);
    this.mode = 1;
  },err=>{
    console.log(err);
    this.errorMessage=err.error.message;
    this.mode=0;
  })
}
public updateV(){
  this.stationService.updateVoyageur(this.voyageur)
  .subscribe(data=>{
    this.mod=1;
    console.log(data);
  },err=>{
    console.log(err);
  })
}
}
