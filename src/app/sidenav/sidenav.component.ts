import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isenabled:boolean=false;
  s:boolean = false;
  @Output()
  eventvariable:EventEmitter<boolean>=new EventEmitter<boolean>()
  constructor() { }
  func2() : void{
    this.s = !this.s;
  }

  enablecheckbox(){
    this.isenabled=!this.isenabled;
    this.eventvariable.emit(this.isenabled)
  }

  
  ngOnInit() {
  }

}
