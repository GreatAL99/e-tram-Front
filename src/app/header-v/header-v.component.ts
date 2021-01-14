import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-header-v',
  templateUrl: './header-v.component.html',
  styleUrls: ['./header-v.component.css']
})
export class HeaderVComponent implements OnInit {
  public cin : any;
  public nom : any;
  public prenom : any;
  mode : number = 0;

  constructor(private service:StationService) { }

  ngOnInit(): void {
    this.cin = sessionStorage.getItem('cin');
    this.nom = sessionStorage.getItem('nom');
    this.prenom = sessionStorage.getItem('prenom');
    if (this.service.isUserLoggedIn()){
      this.mode = 1;
    }
    else{
      this.mode=0;
    }
  }

}
