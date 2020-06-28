import { Component, OnInit } from '@angular/core';
import * as myJson from './../questions.json';
import { MainServiceService } from 'src/app/service/main-service.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  constructor(private mainService: MainServiceService) { }
  questions;
  correctQuestions = 0;
  questionAnswered = false;
  flag = false
  initial;
  incorrect;
  questionAnsweredCorrect = false;
  questionAnsweredWrong = false;
  wrong1 = false;
  wrong2 = false;
  wrong3 = false;

  firstStar = false;
  secondStar = false
  thirdStar = false;

  i = 0;
  ngOnInit(): void {
    this.questions = myJson
    this.initial = this.questions.default;
    this.initial.map(d => {
      d.question = decodeURI(d.question);
      d.question = d.question.replace(/%3F/g, "?");
      d.question = d.question.replace(/%2C/g, " ");
      d.category = d.category.replace(/%20/g, " ")
      d.category = d.category.replace(/%3A/g, ":")
      d.correct_answer = decodeURI(d.correct_answer);
      d.incorrect_answers.map(e => {

        e = e.replace(/%20/g, " ");
        e = e.replace(/%2C/g, " ");
        // e=decodeURI(e)
        console.log(e);
      })

    });

    console.log(this.initial);
    this.questions = this.initial;

    this.checkDifficulty();




  }
  checkDifficulty() {
    if (this.questions[this.i].difficulty == "easy") {
      this.firstStar = true;
    }
    else if (this.questions[this.i].difficulty == "medium") {
      this.firstStar = true;
      this.secondStar = true
      // this.thirdStar=true;
    }
    else if (this.questions[this.i].difficulty == "hard") {
      this.firstStar = true;
      this.secondStar = true
      this.thirdStar = true;
    }
  }
  correctAnswer() {

    this.wrong1 = true;
    this.wrong2 = true;
    this.wrong3 = true;;


    this.questionAnsweredCorrect = true;
    this.questionAnswered = true;
    this.correctQuestions++;
    this.flag = true;
  }

  nextQuestion() {
    this.questionAnsweredCorrect = false;
    this.questionAnsweredWrong = false;
    this.i++;
    this.mainService.sendMessage(this.i);
    this.mainService.sendObj({ "correctAnswer": this.correctQuestions, "totalQuestions": this.questions.length, "index": this.i });
    this.questionAnswered = false;
    this.flag = false;
    this.wrong1 = false;
    this.wrong2 = false;
    this.wrong3 = false;;
    this.firstStar=false
    this.secondStar=false;
    this.thirdStar=false;
    this.checkDifficulty();

  }
  wrongAnswer(abc) {
    if (abc == 0) {
      this.wrong2 = false;
      this.wrong3 = false;
    }
    else if (abc == 1) {
      this.wrong1 = false;

      this.wrong3 = false;
    }

    else {
      this.wrong1 = false;
      this.wrong2 = false;

    }
    this.questionAnsweredWrong = true;
    this.questionAnswered = true;
    this.flag = true;

  }

}
