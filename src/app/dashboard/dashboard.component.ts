import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  specialEvents = []
  public openingMessage="";
  public closingMessage="";
  today: number = Date.now();
  constructor() { }

  ngOnInit() {
    
    this.bussinesDays()
  }

  bussinesDays(){
    let d = new Date();
    let n = d.getDay();
    let now = d.getHours() + "." + d.getMinutes();
    let weekdays = [
        
        ["Monday", 8.30, 12.00, 15.30,19.00],
        ["Tuesday", 8.30, 12.00, 15.30,19.00],
        ["Wednesday", 8.30, 12.00, 15.30,19.00],
        ["Thursday", 8.30, 12.00, 15.30,19.00],
        ["Friday", 8.30, 11.30],
        ["Saturday"], // we are closed, sorry!
        ["Sunday"],// we are closed, sorry
    ];
    let day = weekdays[n];


    if (now > day[1] && now < day[2] || now > day[3] && now < day[4]) {
      
        console.log("We're open right now! It's :" + now);
        this.openingMessage=`We're open right now! It's :` + now;
      
    }
     else {
       this.closingMessage="Sorry, we're closed!, Our opening hours Monday to Friday, 8.30, 12.00, 15.30,19.00"
      
    }
  }

}
