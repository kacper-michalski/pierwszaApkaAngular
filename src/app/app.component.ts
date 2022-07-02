import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pierwszaApkaAngular';
}
var input = document.getElementById('result') as HTMLInputElement | null;
var value=input?.value;
console.log(value);
if (input!= null) {
  console.log(input.value)
}