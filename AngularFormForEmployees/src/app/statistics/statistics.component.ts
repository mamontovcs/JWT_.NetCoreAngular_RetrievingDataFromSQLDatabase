import {Component, OnInit} from '@angular/core';
import {AnswerService} from '../services/answer.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private as: AnswerService) {
  }

  desirableTechnology: string;

  ngOnInit(): void {
    this.getDesirable();
  }

  getDesirable() {
    this.as.getDesirable().subscribe(res => this.desirableTechnology = res);
    console.log(this.desirableTechnology);
  }

}
