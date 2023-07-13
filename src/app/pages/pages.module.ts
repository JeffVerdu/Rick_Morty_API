import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';



@NgModule({
  declarations: [
    HomeComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
