import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-tres',
  templateUrl: './exercicio-tres.component.html',
  styleUrls: ['./exercicio-tres.component.css']
})
export class ExercicioTresComponent implements OnInit {
  n1  : number = 0;
  n2  : number = 0;
  oper: string = '';
  result: number = 0;

  constructor() {}
  ngOnInit(): void {
    
  }

  calcular(){    
    switch (this.oper){
      case 'soma':{
        this.result = this.n1 + this.n2;
        break;
      }
      case 'subt':{
        this.result = this.n1 - this.n2;
        break;
      }
      case 'mult' :{
        this.result = this.n1 * this.n2;
        break;
      }
      case 'divi' :{
        this.result = this.n1 / this.n2;
        break;
      }
    }
  }

  limpar(){
    this.result = 0;
  }
}