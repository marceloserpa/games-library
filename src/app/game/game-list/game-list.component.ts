import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games:Game[];

  constructor(private gameService: GameService , private route: ActivatedRoute, private router : Router
  ) { }

  ngOnInit() {
    this.gameService.fetchGames();
    this.gameService.newGames.subscribe((games: Game[]) => {
      this.games = games;
    })
  }

  onNewGame(){
    this.router.navigate(['new'], { relativeTo: this.route})
  }



}
