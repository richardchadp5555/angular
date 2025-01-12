import { Component } from '@angular/core';
import { HeroesModule } from './heroes/heroes.module';
import { CentroComponent } from './centro/centro.component';
import { DbzModule } from './dbz/dbz.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroesModule,
    CentroComponent,
    DbzModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  VALOR_DEFAULT: number = 0;
  public title: string = 'Angular';
  public subtitle: string = 'Richard Chadwick Plaza 2ºDAM';
  public contador: number = 10;


// incrementarPor(): void{
//   this.contador += 1;
// }

// decrementarPor(): void{
//   this.contador -= 1;
// }

// resetear(): void{
//   this.contador = this.VALOR_DEFAULT;
// }

// echarSanchez(): void{
//   const sanchez = document.getElementById('sanchezImagen') as HTMLElement;
//   const sanchezTriste = document.getElementById('sanchezTriste') as HTMLElement;

//   sanchez.style.display = 'none';
//   sanchezTriste.style.display = 'block';

//   setTimeout(() => {
//     sanchezTriste.style.display = 'none';
//   }, 2000)

// }

}






