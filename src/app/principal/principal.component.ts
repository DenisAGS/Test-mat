import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  title = 'test-mat';

  isHovered: { [key: number]: boolean } = {};

  onMouseEnter(index: number): void {
    this.isHovered[index] = true;
  }

  onMouseLeave(index: number): void {
    this.isHovered[index] = false;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
