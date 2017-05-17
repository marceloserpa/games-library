import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  @Input() game;
  @Input() index;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }


}
