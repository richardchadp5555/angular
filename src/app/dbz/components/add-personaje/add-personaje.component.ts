import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css'],
})
export class AddPersonajeComponent {
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  nuevo: Personaje = {
    id: uuid(),
    nombre: '',
    poder: 0,
  };
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    const nuevoPersonaje = { ...this.nuevo, id: uuid() };
    this.onNuevoPersonaje.emit(nuevoPersonaje);

    this.nuevo = { id: uuid(), nombre: '', poder: 0 };
  }
}
