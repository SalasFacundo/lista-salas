import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos : any[] = [];
  cols : string[] = [];

  constructor() { }

  ngOnInit(): void {

    this.alumnos = [
              {nombre: "Homero", apellido: "Simpsons", inscripcion: new Date("2023-01-16"), curso: "Angular", nota: 6},
              {nombre: "Marge", apellido: "Simpsons", inscripcion: new Date("2023-01-17"), curso: "React", nota: 8},
              {nombre: "Lisa", apellido: "Simpsons", inscripcion: new Date("2023-01-18"), curso: "Java", nota: 10},
              {nombre: "Bart", apellido: "Simpsons", inscripcion: new Date("2023-01-19"), curso: "Python", nota: 3},
              ]           
    
    this.cols = ["Numero", "Nombre", "Apellido", "Curso", "Fecha de inscripcion", "Nota"];
    }
  }

