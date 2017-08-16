import { Component, OnInit } from '@angular/core';
import {Task} from '../Task'
import { TaskService } from "../services/task.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
//  styleUrls: ['./task.component.css'],
styleUrls: ['./css/bootstrap.min.css'],
providers:[TaskService]
})


export class TaskComponent implements OnInit {
  tasks: Task[] = []
  
  constructor( private dataSerive: TaskService) { 
    this.tasks = dataSerive.getTasks();
  }

  ngOnInit() {

  }

  completeAll(checked:boolean) {
 //   this.tasks.forEach( task => task.setCompleted(checked))
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(  t => t !== task);
  }

  removeAll(task: Task[])
  {
    this.tasks.forEach(task => this.removeTask(task))
  }
  updateTask(task: Task,name:string,price:number ,quant:number) {
    this.tasks = this.tasks.filter(  t => t !== task);
  }


  addNewTask(name: string, price: number, quant: number){
   // this.tasks.push(new Task(description, description==='break'? true:false));
   this.tasks.push(new Task(name,price,quant));
  }

  getSingleProductPrice(tasks: Task)
  { 
    var n = 0;
    n = tasks.getPrice()*tasks.getQuantity();
      
    return n;
  }

  getTotalPrice(tasks: Task[])
  { 
    var n = 0;
    tasks.forEach(element => {
    n += this.getSingleProductPrice(element);
      
    });
    return n;
  }

  getTotalQuantity(tasks: Task[])
  { 
    var n = 0;
    tasks.forEach(element => {
    n += element.getQuantity();
      
    });
    return n;
  }

  handleKeyUp(ev) {
    if (ev.which === 13){
    //  this.addNewTask(ev.target.value);
      ev.target.value = ''
    }
  }


}

@Component({
  selector: 'app-bill',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})

export class BillComponent implements OnInit {
  tasks: Task[] = []
  
  constructor( private dataSerive: TaskService) { 
    this.tasks = dataSerive.getTasks();
  }

  ngOnInit() {

  }


}