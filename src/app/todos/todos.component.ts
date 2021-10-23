/*
          AUTHOR : GAUTAM CHANDRA SAHA
          DATE & TIME: Sat, October 23,2021 AT 20:59 
          DESCRIPTION:

*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todoList = [
    'Go to gym',
    'Sleep',
    'Go for jogging',
    'Assignments',
    'Eat',
    'Practice sight reading',
  ];
  inps: any;

  selectedTodos: any = [];

  add(element: any) {
    !this.selectedTodos.includes(element)
      ? this.selectedTodos.push(element)
      : null;
  }
  check(index: any, element: any): void {
    this.inps = document.querySelectorAll('input');
    this.inps[index].checked = true;
    this.add(element);
  }

  splice(elem: any, i: any) {
    this.inps = document.querySelectorAll('input');
    const index = this.todoList.indexOf(elem);
    this.selectedTodos.splice(i, 1);
    this.inps[index].checked = false;
  }
}
