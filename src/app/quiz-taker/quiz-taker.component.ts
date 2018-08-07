import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  quizId = ''

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.quizId = params['quizId']);
  }

}
