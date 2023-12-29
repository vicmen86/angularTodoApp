import { Component } from '@angular/core';
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
}
