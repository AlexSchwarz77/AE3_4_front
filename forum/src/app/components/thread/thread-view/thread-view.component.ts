import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { ThreadModel } from 'src/app/models/thread-model';
import { PostService } from 'src/app/service/post.service';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-thread-view',
  templateUrl: './thread-view.component.html',
  styleUrls: ['./thread-view.component.css']
})
export class ThreadViewComponent implements OnInit{

  posts!: Array<Post>;
  thread!: ThreadModel;

  constructor(private route: ActivatedRoute, private postService: PostService, private threadService: ThreadService){}

  ngOnInit(): void {
    const threadId = parseInt(this.route.snapshot.paramMap.get('threadId')!)
    this.postService.findPostByThreadId(threadId).subscribe(data => {this.posts = data;});
    this.threadService.findThreadById(threadId).subscribe(data => {this.thread = data;});
  }

  postThePost(form: NgForm){
    let post: Post = new Post();
    post.content = form.value.content;
    post.user.userId = 2; //user!!!!!!!!!;
    post.threadModel = this.thread;
    // console.log(post);
    this.postService.savePost(post).subscribe(() => {
      location.reload();
    });
  }

}
