import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

taskArr = [{taskName: 'Learn Angular',isCompleted:false},
           {taskName: 'Submit Assignment', isCompleted:false},
           {taskName: 'Learn Bootstrap', isCompleted:false},
           {taskName: 'Study', isCompleted:false}  ];

  constructor () {}

  ngOnInit(): void 
  {

  }
  onSubmit(form: NgForm)
  {
   this.taskArr.push({
    taskName:form.controls['task'].value,
    isCompleted: false
   })
   form.reset();
  }
  onDelete(index: number)
  {
     this.taskArr.splice(index, 1);
  }

  onChange(index: number)
  {
     this.taskArr[index].isCompleted = !this.taskArr[index].isCompleted 
  }


  editingIndex: number = -1; // Index of the task being edited

  onEdit(index: number): void {
    this.editingIndex = index;
  }

  onSave(index: number): void {
    this.editingIndex = -1; // Exit editing mode
  }

  onCancelEdit(index: number): void {
    this.editingIndex = -1; // Exit editing mode
  }
}
