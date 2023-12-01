import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, OnInit, signal } from '@angular/core';
import { ThreadModel } from 'src/app/models/thread-model';
import { CommService } from 'src/app/service/comm.service';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck{
  
  threads!: Array<ThreadModel>;
  threadsObs: any;
  constructor(private threadService: ThreadService, private commService: CommService){}
  
  ngOnInit(): void {
    this.threadService.latestThreads().subscribe(data => {this.threads = data;this.commService.setItems(this.threads); this.commService.setFilter(this.threads)})
    
  }

  ngDoCheck(): void {
    this.threadsObs = this.commService.getFilter();
  }
}