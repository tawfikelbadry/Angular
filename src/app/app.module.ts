import { SharedService } from './services/shared.service';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginService } from './services/login.service';
import { OtherComponent } from './other/other.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    OtherComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  
  ],
  providers: [LoginService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
