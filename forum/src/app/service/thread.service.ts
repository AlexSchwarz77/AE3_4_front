import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ThreadModel } from '../models/thread-model';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  getAllThreadBySubforum(subName: string): Observable<any>{
    return this.http.get(`${this.apiUrl}thread/search/${subName}`);
  }

  saveThread(thread:ThreadModel):Observable<ThreadModel>{
    return this.http.post<ThreadModel>(`${this.apiUrl}thread/save`, thread)
  }
}
