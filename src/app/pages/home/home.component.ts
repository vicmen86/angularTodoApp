import { Component, computed, signal, effect } from '@angular/core'; //los tres ultimos componentes mas importantes para reactividad en angular
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Usaremos un interfaz para que cumpla una estrucrura predefinida. esto evitara futuros errores e informacion homogenea
  tasks=signal<Task[]>([//tasks debe ser un array que cumpla la estructura de la interfaz(Task[])
    ]);
  ejeTasks=[{
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
  },]
  // Instancia del controlador del formulario
  newTaskControl= new FormControl('',{ //valores por defecto y configuracion de FormControl
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });
  //Estado para controlar los filtros
  filter=signal<'all'|'pending'|'completed'>('all'); //solo recibe esas 3 opciones
  //aqui empezaos a hacer estados computados o derivados de otros(reactividad)
  tasksByFilter=computed(()=>{//Calcula nuevos estados a partir de otros y simpre retorna un estado
    const filter = this.filter();
    const tasks = this.tasks();
    if(filter==='pending'){
      return tasks.filter(task => !task.completed);
    }
    if(filter==='completed'){
      return tasks.filter(task => task.completed);
    }
    return tasks;
  })
  // como es una clase puede tener un constructor en el cual vamos a instanciar un effect
  constructor(){
    effect(()=>{ //monitorea el cambio de un estado(traking), cada vez que cambie un estado se ejecuta una logica
    const tasks = this.tasks();
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    })
  }
  ngOnInit(){
    const storage = localStorage.getItem('tasks');
    if(storage){
      const tasks = JSON.parse(storage);
      this.tasks.set(tasks);
    }
  }

  changeHandler(){//Los valores del imput estan en newTaskControl
    if (this.newTaskControl.valid){
      const newTask = this.newTaskControl.value.trim();
      if(newTask !== ''){
        this.addTask(newTask);
      this.newTaskControl.setValue('');
      }

    }

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
   /*  this.tasks.mutate(state=>{
      const currentTask=state[index];
      state[index]={
        ...currentTask,
        completed: !currentTask.completed
      }
    }) */
  }
  updateTaskEditing(index:number){
    this.tasks.update((tasks)=>{
      return tasks.map((task, position)=>{
        if (position===index){
          return {...task, editing:true}; //Cuando una tare ase activa las demas se ponen en false
        }
        return {...task, editing:false};
      })
    })
  }
  updateTaskTitle(index:number, event:Event){
    const input = event.target as HTMLInputElement;
    this.tasks.update((tasks)=>{
      return tasks.map((task, position)=>{
        if (position===index){
          return {...task,
            title:input.value,
            editing:false //Esto nos saca del modo edicion
          }; //Cuando una tare ase activa las demas se ponen en false
        }
        return task;
      })
    })
  }
  changeFilter(filter:'all'|'pending'|'completed') { //Aqui el tipo de dato que recibe ya no es un string sino 3 posibles valores
    this.filter.set(filter);
  }
}
