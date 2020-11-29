import {Component, Inject, OnInit} from '@angular/core';
import {FormAnswer} from '../models/FormAnswer';
import {HttpClient} from '@angular/common/http';
import {ANSWERS_API_URL} from '../app-injection-tokens';
import {AnswerService} from '../services/answer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {


  technologies1: string[] = [
    'C#', 'Python', 'Java', 'C++', 'PHP', 'Ruby', 'TypeScript',
    'Angular', 'Murex', 'Android', 'Information Security', 'QA',
    'Scala', 'JavaScript', 'SQL'
  ];

  formAnswer: FormAnswer = new FormAnswer();

  constructor(private http: HttpClient, @Inject(ANSWERS_API_URL) private apiUrl: string, private as: AnswerService) {
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    this.as.postAnswer(data);
    console.log(data);
  }

}

