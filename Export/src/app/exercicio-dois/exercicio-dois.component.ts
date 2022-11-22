import { Component, OnInit } from '@angular/core';
import {Item} from './exercicio-dois.interface';

@Component({
  selector: 'app-exercicio-dois',
  templateUrl: './exercicio-dois.component.html',
  styleUrls: ['./exercicio-dois.component.css']
})
export class ExercicioDoisComponent implements OnInit {
  itens: Item[] = [];

  constructor() { }
  ngOnInit(): void {}

  insere(description: string) {
    if (description.trim() != '') {
      this.itens.push({
        description: description.trim(),
        done: false
      });
    }
  }

  remove(index: number) {
    this.itens.splice(index, 1)
  }

  altera(index: number) {
    this.itens[index].done = !this.itens[index].done;
  }
}