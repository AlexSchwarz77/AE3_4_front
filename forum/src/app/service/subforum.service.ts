import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subforum } from '../models/subforum';

@Injectable({
  providedIn: 'root'
})
export class SubforumService {

  constructor(private http: HttpClient) { }

  getAllSubforum(): Observable<any>{
    return this.http.get('http://localhost:8080/subforum/all');
  }

  saveSubforum(subForm: Subforum): Observable<Subforum>{
    return this.http.post<Subforum>('http://localhost:8080/subforum/save', subForm);
  }
}
