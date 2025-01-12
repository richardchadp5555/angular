import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  @Input() personajes: Personaje[] = [];
  @Output() onEliminarPersonaje: EventEmitter<string> = new EventEmitter();

  eliminar(id: string) {
    this.onEliminarPersonaje.emit(id);
  }
}
