import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chars:any[] = [];

  constructor (private characterService:CharactersService, private router:Router){};

  ngOnInit(): void {
    
    this.characterService.getCharacters().subscribe((resp:any)=>{
      this.chars = resp.results;
      console.log(this.chars);
    })
  }
  clickCharacter(charId:any){
    
    this.router.navigate(['character',charId]);
  }
}
