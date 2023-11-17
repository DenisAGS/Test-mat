import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front1a',
  templateUrl: './front1a.component.html',
  styleUrls: ['./front1a.component.css']
})
export class Front1aComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
