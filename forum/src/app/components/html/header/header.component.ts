import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/service/comm.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items!: Array<any>
  constructor(private commService: CommService) { }
  ngOnInit(): void {
    const filter = document.querySelector('#filter');
    filter!.addEventListener('input', (e) => this.filterData((e.target as HTMLInputElement).value))
  }
  ngAfterViewChecked() {
    this.items = this.commService.getItems();
  }


  filterData(searchterm: string):any {
    let list: any = [];
    return this.items.filter((item) => {
      for (const i in item) {
        if(item[i].toString().toLowerCase().includes(searchterm)){
          if (!list.includes(item)) {
            list.push(item);
          }
        }
      }
      this.items = list
    }), this.commService.setFilter(this.items);

  }

}
