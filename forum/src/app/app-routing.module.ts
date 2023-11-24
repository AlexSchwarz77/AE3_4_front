import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/user/create/create.component';
import { CreateSubComponent } from './components/subforum/create-sub/create-sub.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserComponent } from './components/user/user.component';
import { SubviewComponent } from './components/subforum/subview/subview.component';
import { ThreadCreateComponent } from './components/thread/create/thread-create.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'user-overview', component: UserComponent },
  { path: 'subforum/create', component: CreateSubComponent },
  { path: 'subforum/:subName', component: SubviewComponent },
  { path: 'thread/:subName/create', component: ThreadCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
