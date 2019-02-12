import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularoproj';

  constructor(){

  }

  public optionsList=[
    {
      options :[
        {name:'Check if the leakage in the main landing gear',value:'Leak1',checked:false},
        {name:'Check if the leakage in the hyd pipe line',value:'Leak2',checked:false},
        {name:'Check if the leakage in the wheel brakes',value:'Leak3',checked:false}
      ]
    },
    {
      options :[
        {name:' leakage in the main landing gear',value:'Leak1',checked:false},
        {name:'leakage in the hyd pipe line',value:'Leak2',checked:false},
        {name:' leakage in the wheel brakes',value:'Leak3',checked:false}
      ]
    },
    {
      options :[
        {name:'  landing gear',value:'Leak1',checked:false},
        {name:' hyd pipe line',value:'Leak2',checked:false},
        {name:' wheel brakes',value:'Leak3',checked:false}
      ]
    }
];

public selectedOptions = [this.optionsList[0]];
count = 0;
  nextOption(event: any){
    this.count++;
    if(this.count <= this.optionsList.length-1){
      this.selectedOptions.push(this.optionsList[this.count]);
    }
  }

}
