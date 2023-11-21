import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subforum } from 'src/app/models/subforum';
import { SubforumService } from 'src/app/service/subforum.service';

@Component({
  selector: 'app-create-sub',
  templateUrl: './create-sub.component.html',
  styleUrls: ['./create-sub.component.css'],
})
export class CreateSubComponent implements OnInit {
  subs!: Array<Subforum>;
  sub!: Subforum;

  constructor(private subService: SubforumService) {}
  ngOnInit(): void {
    this.subService.getAllSubforum().subscribe((data) => {
      this.subs = data;
    });
  }

  onAddSub(form: NgForm): void {
    this.sub = form.value;
    if (this.subs.findIndex((el) => el.subName.toLowerCase() == this.sub.subName.toLowerCase()) < 0) {
      this.subService.saveSubforum(this.sub).subscribe(() => {
        location.reload();
      });
    } else {
      alert('Subforum already exists');
    }
  }
}
