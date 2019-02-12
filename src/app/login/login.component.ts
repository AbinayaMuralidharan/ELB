import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  togglevalue:boolean=true
  toggle(){
    this.togglevalue=!this.togglevalue
  }
  constructor(){

  }
  loginfunc(event){
    alert("button clicked")
    
    
  }
  

  ngOnInit() {
  }

  

}
