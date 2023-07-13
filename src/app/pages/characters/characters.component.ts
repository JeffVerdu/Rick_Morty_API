import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  charId:number = 0;
  character:any;

  constructor(private activatedRoute:ActivatedRoute, 
    private router:Router, 
    private CharactersService:CharactersService){}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((resp:any)=>{
      if (/^[1-9]+$/.test(resp.id)){
        this.charId = resp.id;
        this.CharactersService.getCharacterDetais(this.charId).subscribe((resp:any)=>{
          this.character = resp;
        })
      }else{
        this.router.navigate(['']);
      }
    })
  }
}
