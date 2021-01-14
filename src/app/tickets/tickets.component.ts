import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public tickets : any;
  public ticket : any;
  public page : number=0;
  public size : number = 5;
  public date : string="";
  public cin : string="";
  public currentPage : number = 0;
  public totalPages : number;
  public pages : Array<number>;
  public voyageurs:any;
  public nv:number;
  public v:number;



  constructor(private stationService:StationService, private router : Router) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.stationService.Voyageurs()
    .subscribe(data1=>{      
      this.voyageurs = data1;
      console.log(data1);
    },err1=>{
      console.log(err1);
    })

    this.stationService.getTickets(this.currentPage,this.size)
    .subscribe(data=>{      
      this.tickets = data;
      this.pages = new  Array( this.tickets.totalPages);
      console.log(data);
    },err=>{
      console.log(err);
    })

    this.stationService.getNbV()
    .subscribe(data3=>{
      this.v = data3 as number;
      this.pieChartData.push(this.v);
    },err=>{
      console.log(err);
    }) 

    this.stationService.getNbNv()
    .subscribe(data2=>{
      this.nv = data2 as number;
      this.pieChartData.push(this.nv);
    },err=>{
      console.log(err);
    })

  }




  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public pieChartLabels: Label[] = [['Nb tickets validés'],['Nb tickets non validés'] ];
  public pieChartData: Array<number> =[];
  public chartColors: Array<any> = [
    {
      backgroundColor: [ '#46BFBD','#F7464A'],
      hoverBackgroundColor: ['#5AD3D1','#FF5A5E'],
      borderWidth: 2,
    }
  ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  onPageTicket(i)
  {
    this.currentPage = i;
    this.onCherche();
  }

  chercherTicket(form : any)
  {
    this.currentPage = 0;
    this.date = form.date;
    this.cin = form.cin;
    this.onCherche();
  }
  onCherche()
  {
    this.stationService.searchTicket(this.date,this.cin,this.currentPage ,this.size)
    .subscribe(data=>{
      this.tickets = data;
      this.pages = new  Array( this.tickets.totalPages);
      console.log(data);
    },err=>{
      console.log(err);
    })

  }
 onDeleteVal()
 {
  Swal.fire({
    title: 'Etes-vous sûr?',
    text: 'Vous ne pourrez pas récupérer ce fichier !',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimez-le',
    cancelButtonText: 'Non, garde-le'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Effacé!',
        'Votre fichier a été supprimé.',
        'success',
        this.stationService.deleteAfterVal()
        .subscribe(data=>{
          this.onCherche();
        },err=>{
          console.log(err);
        })
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Annulé',
        'Votre fichier  est sécurisé :)',
        'error'
      )
    }
  })
 }

 onEditPrix()
 {
   this.router.navigate(['edit-prix']);

 }

}
