import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  login(username,pass){
    if(username=="admin" && pass=="admin"){
      return true;
    }else{
      return false;
    }
  }

  load(){
   let data=[];
   for(let i=0;i<10;i++){
    var item={id:i,name:"name "+i,icon:"avatar"+i+".jbg"};
    data.push(item);
   }
   return data;
  }

}
