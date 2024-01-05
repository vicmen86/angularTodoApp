import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';//Nos da la ventaja de usar formularios reactivos

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  // variables publicas que se pueden acceder desde el archivo html
  welcome="Bienvenidos a todoApp";
  tasks=["Instalar Angular", "Instalar dependencias y configurar", "Configurar la logia del app", "Revisar errores", "Desplegar app"];

  name="Victory";
  private edad =37;
  disabled= true;
  image="https://w3schools.com/howto/img_avatar.png";
  //Trabajamos con objetos
  person=signal({
    name: "Victor",
    apellido:"Men",
    edad:17,
    avatar:"https://w3schools.com/howto/img_avatar.png"
  })
  // usamos la libreria de forms
  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50,{
    nonNullable: true,
  });
  nameCtrl = new FormControl('',{
    nonNullable: true,
    validators:[
      Validators.required,
      Validators.minLength(3)
    ]
  });
  clickHandler(){
    alert("Hola!");
  }
  changeHandler(event:Event){
    console.log(event);
  }
  keydownHandler(event:KeyboardEvent){
    const input = event.target as HTMLInputElement;//para evitar errores se especifica que el dato es de tipo HTMLInputElement
    console.log(input.value)
  }
  clickHandlerKey(event:Event){
    const input = event.target as HTMLInputElement;
    alert(`Hola ${input.value}`);
  }
  //Signals, reactividad para los componentes
  name2=signal("Fulano")
  changeHandlerSignal(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name2.set(newValue);
  }
  tasks2=signal(["Instalar Angular", "Instalar dependencias y configurar", "Configurar la logia del app", "Revisar errores", "Desplegar app"]);

  changeAge(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    //Como es un objeto se debe operar con sus metodos...
    this.person.update(prevState=>{
      return {
        ...prevState,
        edad: parseInt(newValue,10)
      }
    });
  }
  changeName(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    //Como es un objeto se debe operar con sus metodos...
    this.person.update(prevState=>{
      return {
        ...prevState,
        name:newValue
      }
    });
  }
}
