import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  saveUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/user/save', user);
  }
  allUser(): Observable<any> {
    return this.http.get('http://localhost:8080/user/all');
  }
  userById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/user/${id}`);
  }
}
