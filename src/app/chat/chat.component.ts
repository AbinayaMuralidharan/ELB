import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() selectedoptions: any = "abi";
  selectedlist=[];
  strans:string=""
  @Input() public options=[
    // {name:'Check if the leakage in the main landing gear',value:'Leak1',checked:false},
    // {name:'Check if the leakage in the hyd pipe line',value:'Leak2',checked:false},
    // {name:'Check if the leakage in the wheel brakes',value:'Leak3',checked:false}
  ];

  @Output()
  public nextOption = new EventEmitter();
  
  constructor() { }
  checked() { 
    return this.options.filter(opt => opt.checked)
    
   
    
  }

  ngOnInit() {
    // console.log(this.options);
  }

  selectedOptionFunc(){
    this.nextOption.emit(this.checked());
  }

}
