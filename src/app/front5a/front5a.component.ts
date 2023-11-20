import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front5a',
  templateUrl: './front5a.component.html',
  styleUrls: ['./front5a.component.css']
})
export class Front5aComponent implements OnInit {
  dofValue: string = '';
  x0Value: string = '';
  x1Value: string = '';
  errorValue: string = '';

  opciones: string[] = ['Simpson', 'T-distribution'];

  opcionesError: string[] = ['1', '2', '3', '4', '5', '6'];


  opcionSeleccionada: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
