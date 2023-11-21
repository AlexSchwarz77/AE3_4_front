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
  updateUser(user: User): Observable<User> {
    return this.http.put<User>('http://localhost:8080/user/update', user);
  }
  updatePwUser(user: User): Observable<User> {
    return this.http.put<User>('http://localhost:8080/user/update/pw', user);
  }
  validatePw(user: User): Observable<Boolean> {
    return this.http.post<Boolean>('http://localhost:8080/user/pw', user);
  }
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:8080/user/delete/${id}`);
  }
}
