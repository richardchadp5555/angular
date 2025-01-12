import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get personajes(): Personaje[] {
    return this.dbzService.getPersonajes();
  }

  agregarPersonaje(personaje: Personaje) {
    this.dbzService.agregarPersonaje(personaje);
  }

  eliminarPersonaje(id: string) {
    this.dbzService.eliminarPersonajePorId(id);
  }
}
