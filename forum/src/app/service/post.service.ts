import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findPostByThreadId(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}post/thread/${id}`);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}post/save`, post)
  }

  countPostByUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}post/count/${id}`)
  }
  lastPostsByUser(id: number):Observable<any> {
    return this.http.get(`${this.apiUrl}post/posts/${id}`)
  }
}
