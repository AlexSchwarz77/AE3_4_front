import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subforum } from 'src/app/models/subforum';
import { SubforumService } from 'src/app/service/subforum.service';

@Component({
  selector: 'app-create',
  templateUrl: './thread-create.component.html',
  styleUrls: ['./thread-create.component.css']
})
export class ThreadCreateComponent implements OnInit{

  subFora!: Array<Subforum>;
  subName!: string;

  constructor(private subService: SubforumService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.subName = this.route.snapshot.paramMap.get('subName')!; 
    this.subService.getAllSubforum().subscribe(element => {
      this.subFora = element;
    })
  }

  subSub(form:NgForm){

    if (form.value.sub == "") {
      console.log(this.subName);
      
    }else{
      console.log(form.value.sub);
      
    }
  }
}
