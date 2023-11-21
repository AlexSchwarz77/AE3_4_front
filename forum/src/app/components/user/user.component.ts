import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users!: Array<User>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.allUser().subscribe((data) => {
      this.users = data;
    });
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      setTimeout(() => {
        location.reload();
      }, 300);
    });
  }
}
