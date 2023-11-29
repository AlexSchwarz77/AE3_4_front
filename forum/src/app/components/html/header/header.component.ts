import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  ngOnInit(): void {
    const filter = document.querySelector('#filter');
    filter!.addEventListener('input', (e) => this.filterData((e.target as HTMLInputElement).value))
  }

  
  filterData(searchterm: string){
        
  }

}
