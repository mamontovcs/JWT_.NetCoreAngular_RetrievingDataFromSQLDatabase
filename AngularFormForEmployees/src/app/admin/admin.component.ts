import {Component, OnInit} from '@angular/core';
import {FormAnswer} from '../models/FormAnswer';
import {AnswerService} from '../services/answer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  answers: FormAnswer[] = [];
  columns = ['id', 'Technology', 'A1', 'A2', 'A3'];

  constructor(private as: AnswerService) {
  }

  ngOnInit(): void {
    this.as.getAnswers().subscribe(res => this.answers = res);
  }
}
