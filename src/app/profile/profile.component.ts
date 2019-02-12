import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  w: string ;
  openNav() :void {
    this.w = "250px";
    
 }
 
  closeNav() : void {
   this.w = "0px";
 }
  constructor() { }

  ngOnInit() {
  }

}
