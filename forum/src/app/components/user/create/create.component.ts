import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  addUser!: User;
  roles: Array<any> = [];
  selectedRoles: Array<any> = [];

  constructor(private roleService: RoleService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.roleService.allRole().subscribe((data) => {
      this.roles = data;
    });
  }

  isSelected(value:string): boolean{
    return this.selectedRoles.indexOf(value) >= 0;
  }


  roleChange(value: Role, checked:boolean){
    if (checked) {
      this.selectedRoles.push(value);
    } else{
      let index = this.selectedRoles.indexOf(value);
      this.selectedRoles.splice(index, 1);
    }
  }

  onAddUser(addUser: NgForm): void {
    this.addUser = addUser.value;
    this.addUser.role = this.selectedRoles;
    this.userService.saveUser(this.addUser).subscribe(
      () => {  },
      (error: HttpErrorResponse) => { alert("Ein Fehler ist aufgetretten. Bitte versuchen Sie es erneut.") }
    );
    setTimeout(() => {
      this.router.navigate(['../../'])
    }, 100);

  }
}
