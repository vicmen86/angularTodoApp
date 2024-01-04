import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Usaremos un interfaz para que cumpla una estrucrura predefinida. esto evitara futuros errores e informacion homogenea
  tasks=signal<Task[]>([//tasks debe ser un array que cumpla la estructura de la interfaz(Task[])
  {
    id: Date.now(),
    title:"Instalar Angular",
    completed: false,
  },
  {
    id: Date.now(),
    title:"Instalar dependencias y configurar",
    completed: false,
  },
  {
    id: Date.now(),
    title:"Configurar la logia de la app",
    completed: false,
  },
  {
    id: Date.now(),
    title:"Desplegar app",
    completed: false,
  },
  ]);

  changeHandler(event:Event){
    const input = event.target as HTMLInputElement; //parA evitar errorEs se especifica que el dato es de tipo HTMLInputElement
    const newTasks = input.value;
    this.addTask(newTasks);
  }
  addTask(title:string){
    const newTasks={
      id:Date.now(),
      title,
      completed: false,
    }
    this.tasks.update((tasks)=>[...tasks, newTasks]);// Acutalizo el array con update
  }

  deleteTask(index:number){
    this.tasks.update((tasks)=>tasks.filter((task, position)=>position !== index))
  }
//actualizar ua tarea para que cambie su estado
  updateTask(index:number){
    this.tasks.update((tasks)=>{
      return tasks.map((task, position)=>{
        if (position===index){
          return {...task, completed: !task.completed} //Cambia dependiendo de su estado anterior
        }
        return task;
      })
    })
  }

}
