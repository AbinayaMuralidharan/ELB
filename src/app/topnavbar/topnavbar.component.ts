import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {
  w: string ;
  enable:boolean=false
  hidingSidenav:boolean=true;
  openNav() :void {
    this.w = "250px";

    this.hidingSidenav=false
 }
 
  closeNav() : void {
   this.w = "0px";
   this.hidingSidenav=true;
 }
 checkfun(isenabled:boolean){
  this.enable=isenabled;
 }
  constructor() { }

  ngOnInit() {
  }

}
