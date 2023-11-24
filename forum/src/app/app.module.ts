import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/html/header/header.component';
import { FooterComponent } from './components/html/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/user/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserComponent } from './components/user/user.component';
import { CreateSubComponent } from './components/subforum/create-sub/create-sub.component';
import { SubviewComponent } from './components/subforum/subview/subview.component';
import { ThreadCreateComponent } from './components/thread/create/thread-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    EditUserComponent,
    UserComponent,
    CreateSubComponent,
    SubviewComponent,
    ThreadCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
