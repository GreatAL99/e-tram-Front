import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { map } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
declare var bootbox:any;

@Component({
  selector: 'app-voyageurs',
  templateUrl: './voyageurs.component.html',
  styleUrls: ['./voyageurs.component.css']
})
export class VoyageursComponent implements OnInit {
  public mode:number=1;
  public mode2:number;
  public nombre:number;
  public nombre2:number=0;
  public message:any;
  public message1:any;
  public voyageurs : any;
  public size : number = 5;
  public currentPage : number = 0;
  public totalPages : number;
  public pages : Array<number>;
  public mc : string;
  public currentKeyword : string ="";

  constructor(private stationService : StationService , private router : Router) { }

  ngOnInit(): void {
    this.mode2=this.mode;
    this.stationService.getVoyageurs(this.currentPage,this.size)
     .subscribe(data=>{
       this.voyageurs = data;
       this.totalPages = data["page"].totalPages;
       this.pages = new  Array<number>(this.totalPages);
     },err=>{
       console.log(err);
     })
  }

  onVoyageurPage(i)
  {
    this.currentPage = i;
    this.onCherche();
  }

  onChercher(form : any)
  {
    this.currentPage = 0;
    this.currentKeyword = form.keyword;
    this.onCherche();
  }
  onCherche()
  {
    this.stationService.searchVoyageur(this.currentKeyword,this.currentPage ,this.size)
    .subscribe(data=>{
      this.voyageurs = data;
      this.totalPages = data["page"].totalPages;
      this.pages = new  Array<number>(this.totalPages);
    },err=>{
      console.log(err);
    })
 }


 
 verefier(cin:string)
 {
   this.stationService.verefier(cin)
   .subscribe(data=>{
     this.message=data;
     console.log(data);
     if(this.message == 1){
       this.mode=0;
     }
  },err=>{
    console.log(err);
  })
 }


 assurer(cin:string):string
 {
   this.stationService.assurer(cin)
   .subscribe(data=>{
       this.message1 = data;
       console.log(data);
  },err=>{
    console.log(err);
  })
  return this.message1;
 }



 onDeleteVoyageur(cin:any)
 {
  this.verefier(cin);
  if(this.assurer(cin)[0]["cin"] == cin && this.message1 && this.message1 != undefined && this.message1 !=null){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
           this.stationService.deleteVoyageur(cin)
           .subscribe(data=>{
            this.onCherche();
          },err=>{
            console.log(err);
          })
        )
        
      }
    })
  }

 
 }


 onEditVoyageur()
 {
   this.router.navigate(['edit-nombre-tickets']);

 }
}
