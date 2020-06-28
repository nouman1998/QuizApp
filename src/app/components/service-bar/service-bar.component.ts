import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-service-bar',
  templateUrl: './service-bar.component.html',
  styleUrls: ['./service-bar.component.css']
})
export class ServiceBarComponent implements OnInit {

  constructor(private service:MainServiceService) { }
obj
correctedPercentage=0
probCorrectedPercentage=100
probWrongPercetage
  ngOnInit(): void {
    this.service.obj$.subscribe(d=>{
      
      console.log(d);
      this.obj=d;
      this.correctedPercentage=((this.obj.correctAnswer/this.obj.index)*100);
      this.probCorrectedPercentage=(((this.obj.correctAnswer+(this.obj.totalQuestions-this.obj.index))/this.obj.totalQuestions)*100);
      this.probWrongPercetage=((this.obj.correctAnswer/this.obj.totalQuestions)*100);
      console.log(this.correctedPercentage)
      console.log(this.probCorrectedPercentage);
      console.log(this.probWrongPercetage);


    })
  }


}
