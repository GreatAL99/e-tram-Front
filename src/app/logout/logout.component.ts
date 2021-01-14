import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service : StationService , private router : Router) { }

  ngOnInit(): void {
    this.service.logOut();
    this.router.navigate(['login']);
  }
}
