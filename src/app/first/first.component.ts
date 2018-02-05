import { SharedService } from './../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  data:Array<Object>;
  constructor(private loginSerive:LoginService,public share:SharedService) { 
    console.log("First Component");
    console.log(this.share.getName());
    console.log(this.share.getPassword());
    console.log(this.share.getToken());

  }

  ngOnInit() {
    this.load();
  }


  load(){
    this.data=this.loginSerive.load();
  }

}
