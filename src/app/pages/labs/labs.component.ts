import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
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
  person={
    name: "Victory",
    apellido:"Men",
    edad:37,
    avatar:"https://w3schools.com/howto/img_avatar.png"
  }
  clickHandler(){
    alert("Hola!");
  }
  changeHandler(event:Event){
    console.log(event);
  }
  keydownHandler(event:KeyboardEvent){
    const input = event.target as HTMLInputElement;
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
}
