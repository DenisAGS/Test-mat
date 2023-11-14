import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-mat';

  devCheckbox: boolean = false;
  proxyCheckbox: boolean = false;
  result: string = '';

  selectCheckboxChange(checkboxType: string): void {
    if (checkboxType === 'dev') {
      this.proxyCheckbox = false;
    } else if (checkboxType === 'proxy') {
      this.devCheckbox = false; 
    }
  }
}

