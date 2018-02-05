import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  id:string; name:string; age:string;


  constructor(private route:ActivatedRoute) { 

    if(this.route.snapshot.queryParamMap.get('id')!=null){
      this.id=this.route.snapshot.queryParams['id'];
      this.name=this.route.snapshot.queryParamMap.get('name');
      this.age=this.route.snapshot.queryParamMap.get('age');
      console.log("Query parameters......................");
      console.log('id : '+this.id);
      console.log('name : '+this.name);
      console.log('age : '+this.age);
      }
  
    if(this.route.snapshot.paramMap.get('id')!=null){
        console.log("optional parameters......................");
        this.id=this.route.snapshot.paramMap.get('id');
        this.name=this.route.snapshot.paramMap.get('name');
        console.log('id : '+this.id);
        console.log('name : '+this.name);
     }

  }


  ngOnInit() {


    
  }

}
