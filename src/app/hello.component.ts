import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h2>Todo</h2>
    <div>
        <input type="text" placeholder="filter tasks" #filter (keyup)="onKey(filter.value)">
    <br>
    <span>0 remaining </span>
 
    <ul class="unstyled">
      <li *ngFor="let todo of searchResults || todos; let i = index">
        <input type="checkbox" (change)="changeStatus(todo)" [checked]="checkStatus(todo)">
        <span class="{{changeStyle(todo)}}">{{todo.text}}</span>
        [<a href="#" (click)="remove(todo)">remove</a>]
      </li>
    </ul>
    
    <form #f="ngForm" (ngSubmit)="onSubmit(f)">
      <input type="text" name="item" ngModel>
      <input class="btn-primary" type="submit" value="add">
    </form>

    <a href="#" (click)="removeRemining()">clean</a> 
  </div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  name:string;
  constructor() {
     this.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false},
      {text:'modify', done:true},
      {text:'test', done:false},
      {text:'close', done:false}
      ];
  }
  changeStyle = (el) => {
    return el.done === true ? "done-true" : "";
  };
  changeStatus = (el) => {
    return el.done = (el.done == false) ? true : false;
  };
  checkStatus = (el) => {
    return el.done === true ? "checked" : "";
  }; 
  onSubmit = (f) => {
    if(f.valid){
      this.todos.push({text: f.value.item, done:false});
      f.reset();
    }
  }
  remove = (el) => {
    this.todos = this.todos.filter(item => item !== el);
  };
  removeRemining = () => {
    this.todos = this.todos.filter(item => item.done === true);
  }
  onKey = (value) => {
    if(value === ""){
      this.searchResults = false;
    } else {
      this.searchResults = this.todos.filter(item => item.text.includes(value));
    }
  };
}