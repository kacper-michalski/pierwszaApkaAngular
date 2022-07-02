import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./buttons-panel.component.scss']
})
export class ButtonsPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  operation(sign: string){
    (<HTMLInputElement>document.getElementById("result")).value+=sign;
  }
  clear(){
    (<HTMLInputElement>document.getElementById("result")).value="";
  }
  result(){
    var inputValue = (<HTMLInputElement>document.getElementById("result")).value;
    var func = function(text: string) {
      return (new Function( 'return (' + text + ')' )());
    }
    var r=func(inputValue);
    (<HTMLInputElement>document.getElementById("result")).value=r;
  }
}
