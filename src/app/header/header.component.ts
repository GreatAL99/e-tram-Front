import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role : any;
  mode :number = 0;
  constructor(private service:StationService) { }

  ngOnInit(): void {
    if (this.service.isUserLoggedIn()){
      this.mode = 1;
    }
    else{
      this.mode=0;
    }
  }

}
