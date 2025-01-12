import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz para los centros
interface Centro {
  nombre: string,
  localidad: string,
  familiasProfesionales: string[],
  logo: string,
}

@Component({
  selector: 'app-centro',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './centro.component.html',
  styleUrl: './centro.component.css'
})

export class CentroComponent {
  // Lista de centros, array con los centros
  listaCentros: Centro[] = [
    {
      nombre: "IES Playamar",
      localidad: "Torremolinos",
      familiasProfesionales: ["Informática y Comunicaciones", "Transporte y Mantenimiento de Vehículos"],
      logo: "https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png"
    },

    {
      nombre: "IES Jacaranda",
      localidad: "Churriana",
      familiasProfesionales: ["Hostelería y Turismo"],
      logo: "https://hosteleriajacaranda.es/wp-content/uploads/2021/09/logo_iesjacaranda.png"
    },

    {
      nombre: "IES Gerald Brenan",
      localidad: "Alhaurin de la Torre",
      familiasProfesionales: ["Administración y Gestión", "Electricidad", "Informática y comunicaciones"],
      logo: "https://pbs.twimg.com/profile_images/1604311735/logo_400x400.png"
    },

    {
      nombre: "IES Campanillas",
      localidad: "Málaga",
      familiasProfesionales: ["Desarrollo de aplicaciones web", "Sistemas Microinformáticos y Redes", "Eletrónica"],
      logo: "https://iescampanillas.com/wp-content/uploads/2023/12/ic-logo-335x263.jpg"
    },

    {
      nombre: "IES La Rosaleda",
      localidad: "Málaga",
      familiasProfesionales: ["Hostelería y Turismo", "Electricidad", "Sanidad"],
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcXaJmbrgrzyN9FfK1bTb7hWvth4dQwwbBw&s"
    }
  ];

// Lista para almacenar los centros eliminados
listaCentrosEliminados: Centro[] = [];

// Indice del centro actual
indiceCentroActual = 0;

// Método para obtener el centro actual
get centroActual() {
  return this.listaCentros[this.indiceCentroActual];
}

// Método para mostrar el centro
centroPosterior() {
  if (this.indiceCentroActual < this.listaCentros.length - 1){
    this.indiceCentroActual++;
  }
}

// Método para ocultar el centro y ver el anterior
centroAnterior() {
  if (this.indiceCentroActual > 0){
    this.indiceCentroActual --;
  }
}

// Método para eliminar un centro
eliminarCentro() {
  if (this.listaCentros.length > 0){
    // Guardo el centro actual en la lista de centros eliminnados
  this.listaCentrosEliminados.push(this.centroActual);

  // Elimino el centro actual de la lista para que deje de verse
  this.listaCentros.splice(this.indiceCentroActual, 1)

  //Ajusto el indice actual para que no sea superior a la longitud del array
  if(this.indiceCentroActual >= this.listaCentros.length){
    this.indiceCentroActual = this.listaCentros.length -1
  }
  }
}

// Método para volver a añadir un centro a la lista de los centros disponibles
insertarCentro() {
  if (this.listaCentrosEliminados.length > 0) {
    const centroDisponibleNuevo = this.listaCentrosEliminados.pop();
    this.listaCentros.push(centroDisponibleNuevo!);
    this.indiceCentroActual = this.listaCentros.length - 1;
  }
}
}
