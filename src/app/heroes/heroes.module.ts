import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';


@NgModule({
  declarations: [
    HeroeComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroeComponent,

  ]
})
export class HeroesModule { }
