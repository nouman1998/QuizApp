import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor(private mainService:MainServiceService) { }
value=0;
initial
  ngOnInit(): void {
    this.mainService.productMessage$.subscribe(d=>{
     this.initial=d;
     console.log("d");
     this.value=((this.initial/20)*100)
     console.log(this.value);
    })
   
     
  }

}
