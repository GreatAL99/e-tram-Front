import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  public cin : any;
  public nom : any;
  public prenom : any;
  public email : any;
  public tel : any;
  public adresse : any;
  public fonction : any;
  constructor() { }

  ngOnInit(): void {
    this.cin = sessionStorage.getItem('cin');
    this.nom = sessionStorage.getItem('nom');
    this.prenom = sessionStorage.getItem('prenom');
    this.adresse = sessionStorage.getItem('adresse');
    this.email = sessionStorage.getItem('email');
    this.tel = sessionStorage.getItem('tel');
    this.fonction = sessionStorage.getItem('fonction');

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
