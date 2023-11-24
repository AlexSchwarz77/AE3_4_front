import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  getAllThreadBySubforum(subName: string): Observable<any>{
    return this.http.get(`${this.apiUrl}thread/search/${subName}`);
  }
}
