import { SharedService } from './services/shared.service';
import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id:string='587';
  name:string="admin";
  password:string;

  status:boolean;

  constructor(private myloginService:LoginService,private myRouter:Router,public shared:SharedService){
    let first=myloginService.login("admin2","admin");
    let second=myloginService.login("admin","admin");

    console.log(first);
    console.log(second);
  }

  login(){
    var result= this.myloginService.login(this.name,this.password);
    this.status=result;

    this.shared.setName(this.name);
    this.shared.setPassword(this.password);
    this.shared.setToken("65456s4654s");

    if(this.status){
      this.myRouter.navigate(['first']);
    }else{
      this.myRouter.navigate(['other']);
    }
    console.log(result);
  }


  goToFirst(){
    this.myRouter.navigate(["/first",{id:6545,name:'ibrahim'}]);
  }

  goToOther(){
    this.myRouter.navigate(['/other'],{queryParams:{id:454,name:'alaaa'});
  }
  goToNew(){
    this.myRouter.navigate(['/new',this.id]);
  }
  
}
