import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  redirect:boolean=true;
 myFunction(){
 this.redirect=!this.redirect
}
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
