import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user!: User;
  roles: Array<Role> = [];
  selectedRoles: Array<any> = [];

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.userService.userById(userId).subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
    this.roleService.allRole().subscribe((data) => {
      this.roles = data;
    });
  }

  onEditUser(form: NgForm) {
    console.log(document.querySelector('#wer'));
  }

  editRoles(user: User, editRole: any) {
    this.user.role = this.selectedRoles;
    this.userService.saveUser(this.user).subscribe(
      (response: User) => {alert('Role changed');
      location.reload();
      }
    )
  }

  isSelected(value: Role): boolean {
    return this.selectedRoles.indexOf(value) >= 0;
  }

  roleChange(value: Role, checked: boolean) {
    console.log(checked);

    if (checked) {
      this.selectedRoles.push(value);
    } else {
      let index = this.selectedRoles.indexOf(value);
      this.selectedRoles.splice(index, 1);
    }
  }
}
