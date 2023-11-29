import { Component, OnInit } from '@angular/core';
import { ThreadModel } from 'src/app/models/thread-model';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  threads!: Array<ThreadModel>
  constructor(private threadService: ThreadService){}
  ngOnInit(): void {
    this.threadService.latestThreads().subscribe(data => {this.threads = data});
  }

}
