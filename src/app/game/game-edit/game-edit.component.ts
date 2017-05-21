import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit, OnDestroy {
  editMode = false;
  editItem:Game;
  id:number;
  gameForm: FormGroup;

  constructor( private route: ActivatedRoute, private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit(){
    let game: Game = this.gameForm.value;
    if(this.editMode){
      this.gameService.updateGame(this.id, game).subscribe(() => {
        this.router.navigate(['games', this.id]);
      });
    } else {
      this.gameService.saveGame(game).map(response => response.json()).subscribe(games => {
        let lastID = games.length -1;        
        this.router.navigate(['games', lastID]);
      });
    }
  }

  onCancel(){
    this.router.navigate(['games', this.id]);
  }

  private initForm(){
   let gameTitle = '';
   let imageUrl = '';
   let gameDescription = '';

   if(this.editMode){
     const game = this.gameService.getGame(this.id);
     gameTitle = game.title;
     imageUrl = game.imageUrl;
     gameDescription = game.description;
   }

   this.gameForm = new FormGroup({
     'title': new FormControl(gameTitle, Validators.required),
     'imageUrl': new FormControl(imageUrl, Validators.required),
     'description': new FormControl(gameDescription, Validators.required)
   })
 }


  ngOnDestroy() {

  }

}
