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

  getAllThreads(): Observable<Array<ThreadModel>>{
    return this.http.get<Array<ThreadModel>>(`${this.apiUrl}thread/all}`);
  }
  
  getAllThreadBySubforum(subName: string): Observable<any>{
    return this.http.get(`${this.apiUrl}thread/search/${subName}`);
  }

  saveThread(thread:ThreadModel):Observable<ThreadModel>{
    return this.http.post<ThreadModel>(`${this.apiUrl}thread/save`, thread)
  }

  findThreadById(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}thread/${id}`)
  }
  countThreadsByUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}thread/count/${id}`);
  }

  lastThreadsByUser(id: number):Observable<any> {
    return this.http.get(`${this.apiUrl}thread/threads/${id}`);
  }

  latestThreads(): Observable<Array<ThreadModel>> {
    return this.http.get<Array<ThreadModel>>(`${this.apiUrl}thread/latest`);
  }
}
