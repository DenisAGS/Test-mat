import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front3a',
  templateUrl: './front3a.component.html',
  styleUrls: ['./front3a.component.css']
})
export class Front3aComponent implements OnInit {

  opciones: string[] = ['3a test1', '3a test2', '3a test3', '3a test4'];

  opcionSeleccionada: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
