import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})
export class GameComponent implements OnInit {


  constructor(private gameService: GameService) { }

  ngOnInit() {


  }

}
