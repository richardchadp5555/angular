import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  private personajes: Personaje[] = [
    { id: '1', nombre: 'Goku', poder: 9000 },
    { id: '2', nombre: 'Vegeta', poder: 8500 },
    { id: '3', nombre: 'Piccolo', poder: 7000 },
  ];

  // Método para obtener personajes
  getPersonajes(): Personaje[] {
    return [...this.personajes]; // devolvemos una copia de la lista de personajes
  }

  // Método para agregar un personaje
  agregarPersonaje(personaje: Personaje) {
    this.personajes.push(personaje); // Aquí añado el personaje al array
  }

  // Método para eliminar un personaje por ID
  eliminarPersonajePorId(id: string) {
    this.personajes = this.personajes.filter(personaje => personaje.id !== id); // Filtramos por  el ID
    console.log(`Personaje eliminado con ID: ${id}`);
  }
}
