import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  name:string;
  password:string;
  token:string;


  constructor() { }


  public setName(name){
    this.name=name;
  }

  public getName(){
    return this.name;
  }

  public setPassword(pass){
    this.password=pass;
  }

  public getPassword(){
    return this.password;
  }

  public setToken(token){
    this.token=token;
  }

  public getToken(){
    return this.token;
  }
}
