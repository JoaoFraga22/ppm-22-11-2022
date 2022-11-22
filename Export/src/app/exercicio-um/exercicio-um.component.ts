import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-um',
  templateUrl: './exercicio-um.component.html',
  styleUrls: ['./exercicio-um.component.css']
})
export class ExercicioUmComponent implements OnInit {
  altura       : number = 0;
  peso         : number = 0;
  calculo      : number = 0;
  style        : string = 'grave';
  classificacao: string = "Magreza grave";
  constructor() { }
  
  ngOnInit(): void {}
  
  calcular(){
    this.calculo = this.peso / (this.altura * this.altura);

    if (this.calculo >= 40){
      this.classificacao = "Obesidade grau III (obesidade)";
      this.style = 'grave';
    }else{
      if (this.calculo >= 35){
        this.classificacao = "Obesidade grau II (severa)";
        this.style = 'grave';
      }else{
        if (this.calculo >= 30){
          this.classificacao = "Obesidade grau I";
          this.style = 'moderada';
        }else{
          if (this.calculo >= 25){
            this.classificacao = "Sobrepeso";
            this.style = 'leve';
          }else{
            if (this.calculo >= 18.5){
              this.classificacao = "Saudável";
              this.style = 'saudavel';
            }else{
              if (this.calculo >= 17){
                this.classificacao = "Magreza leve";
                this.style = 'leve';
              }else{
                if (this.calculo >= 16){
                  this.classificacao = "Magreza moderada";
                  this.style = 'moderada';
                }
              }
            }
          }
        }
      }
    }
  }
}