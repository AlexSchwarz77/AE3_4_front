import { Component, OnInit } from '@angular/core';
import { Subforum } from 'src/app/models/subforum';
import { SubforumService } from 'src/app/service/subforum.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  subfora!: Array<Subforum>;

  constructor(private subService: SubforumService){}
  ngOnInit(): void {
    this.subService.getAllSubforum().subscribe(data => {this.subfora = data})
  }
}
