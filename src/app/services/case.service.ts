import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Case} from '../models/Case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private httpClient: HttpClient) {
  }

  getCases(): Observable<Case[]> {
    return this.httpClient.get<Case[]>('http://localhost:5000/case');
  }
}
