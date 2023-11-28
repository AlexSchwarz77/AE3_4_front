import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadModel } from 'src/app/models/thread-model';
import { SubforumService } from 'src/app/service/subforum.service';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-subview',
  templateUrl: './subview.component.html',
  styleUrls: ['./subview.component.css']
})
export class SubviewComponent implements OnInit {
  threads!: Array<any>;
  subName!: string;

  constructor(private route: ActivatedRoute, private threadService: ThreadService){}
  ngOnInit(): void {
    this.subName = this.route.snapshot.paramMap.get('subName')!;
    this.threadService.getAllThreadBySubforum(this.subName).subscribe(data =>
      {this.threads = data;
      })
  }
}
