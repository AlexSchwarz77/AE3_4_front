import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { ThreadModel } from 'src/app/models/thread-model';
import { PostService } from 'src/app/service/post.service';
import { ThreadService } from 'src/app/service/thread.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  userName!: string;
  countPost!: number;
  countThread!: number;
  posts!: Array<Post>;
  threads!: Array<ThreadModel>;

  /**
   * p/d message?????
   * achievments?????
   */

  constructor(private router: ActivatedRoute, private userService: UserService, private postService: PostService, private threadService: ThreadService){}

  ngOnInit(): void {
    const userId = parseInt(this.router.snapshot.paramMap.get('id')!)
    this.userService.userById(userId).subscribe(data => {
      this.userName = data.userName
    });
    this.postService.countPostByUser(userId).subscribe(data => {this.countPost = data;});
    this.threadService.countThreadsByUser(userId).subscribe(data => {this.countThread = data;})
    this.postService.lastPostsByUser(userId).subscribe(data => { this.posts = data;})
    this.threadService.lastThreadsByUser(userId).subscribe(data => { this.threads = data;})
  }

}
