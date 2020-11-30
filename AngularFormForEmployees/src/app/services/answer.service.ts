import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormAnswer} from '../models/FormAnswer';
import {ANSWERS_API_URL} from '../app-injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private baseApiUrl = `${this.apiUrl}`;

  constructor(private http: HttpClient, @Inject(ANSWERS_API_URL) private apiUrl: string) {
  }

  getAnswers(): Observable<FormAnswer[]> {
    return this.http.get<FormAnswer[]>(`${this.baseApiUrl}answers/getAnswers`);
  }

  postAnswer(formAnswer: FormAnswer) {
    console.log(formAnswer);
    console.log(`${this.baseApiUrl}answers/create`);
    this.http.post(`${this.baseApiUrl}answers/create`, formAnswer).subscribe();;
  }

  getDesirable(): Observable<string> {
    return this.http.get<string>(`${this.baseApiUrl}answers/getDesirable`);
  }
}
