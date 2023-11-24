import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subforum } from 'src/app/models/subforum';
import { ThreadModel } from 'src/app/models/thread-model';
import { User } from 'src/app/models/user';
import { SubforumService } from 'src/app/service/subforum.service';
import { ThreadService } from 'src/app/service/thread.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './thread-create.component.html',
  styleUrls: ['./thread-create.component.css']
})
export class ThreadCreateComponent implements OnInit{

  subFora!: Array<Subforum>;
  subName!: string;
  thread: ThreadModel = new ThreadModel();
  sub!: Subforum;
  user!: User;

  constructor(private subService: SubforumService, private route: ActivatedRoute, private threadService: ThreadService,
    private userService: UserService){}

  ngOnInit(): void {
    this.subName = this.route.snapshot.paramMap.get('subName')!;
    this.subService.getSubByName(this.subName).subscribe(data => { this.sub = data; });
    this.userService.userById(1).subscribe(data => { this.user = data; })
    this.subService.getAllSubforum().subscribe(element => { this.subFora = element; })
  }

  subSub(form:NgForm){
    if (form.value.sub == "") {
      this.thread.subforum = this.sub;
      this.thread.threadTitle = form.value.threadTitle;
      this.thread.content = form.value.content;
      this.thread.user = this.user;
      // this.thread.date = new Date();      
      
      this.threadService.saveThread(this.thread).subscribe(() =>
        {}
      );
      
    }else{
      this.thread.subforum = form.value.sub;
      this.thread.threadTitle = form.value.threadTitle;
      this.thread.content = form.value.content;
      this.thread.user = this.user;
      // this.thread.date = new Date();
      console.log(this.thread);
      
       
      this.threadService.saveThread(this.thread).subscribe(() =>
        {}
      );
    }
  }
}
