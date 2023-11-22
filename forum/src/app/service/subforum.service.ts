import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subforum } from '../models/subforum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubforumService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllSubforum(): Observable<any>{
    return this.http.get(`${this.apiUrl}subforum/all`);
  }

  saveSubforum(subForm: Subforum): Observable<Subforum>{
    return this.http.post<Subforum>(`${this.apiUrl}subforum/save`, subForm);
  }

  getAllThreadBySubforum(subName: string): Observable<any>{
    return this.http.get(`${this.apiUrl}subforum/search/${subName}`);
  }
}
