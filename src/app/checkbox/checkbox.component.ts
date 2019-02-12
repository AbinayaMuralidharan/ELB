import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  selectedvalues:string="";
  arr=[];
  ok1:boolean=false;signoff:boolean=false;
  no1:boolean=false;
  yes2:boolean=false;no3:boolean=false; yes4:boolean=false;
  option2:boolean=false;
  check:number;
  result:string="";
  public options=[
     {name:'Check if the leakage in the main landing gear',value:'Leak1',checked:false},
     {name:'Check if the leakage in the hyd pipe line',value:'Leak2',checked:false},
     {name:'Check if the leakage in the wheel brakes',value:'Leak3',checked:false}
  ];

  
  newfunc(event){
    if(event.target.checked)
      this.selectedvalues+=event.target.value;
    else
      this.selectedvalues=this.selectedvalues.replace(event.target.value,"")
  }
  
  convertToArray(){
    this.arr=[]
   for( let i of this.selectedvalues){
     this.arr.push(i)
   }
   this.arr.sort()
   this.result=""
    for(let i of this.arr)
      this.result+=i;
    if(this.result=="12LLaaeekk"){
        this.check=1;
    }
    

  }
  option2_fn(){
    this.option2=true
  }
  no1_fn(){
    this.no1=true
  }
  yes2_fn(){
      this.yes2=true
  }
  no3_fn(){
      this.no3=true
  }
  yes4_fn(){
    this.yes4=true
  }
  ok1_fn(){
    this.ok1=true
  }
  signOff(){
    this.signoff=true
  }
  constructor() { }

  ngOnInit() {
  }

}
