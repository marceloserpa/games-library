import { EventEmitter, Injectable } from '@angular/core';
import { Game } from './game.model';
import { RentService } from '../rent/rent.service';
import { Subject} from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GameService {

  gameSelected = new EventEmitter<Game>();

  newGames:Subject<Game[]> = new Subject();

  games: Game[] = [];

  constructor(private rentService: RentService, private http: Http ){}




  fetchGames(){
    this.http.get('https://game-library-6da4c.firebaseio.com/games.json')
    .map((resp: Response) => {
      const games: Game[] = resp.json();
      return games;
    }).subscribe((games: Game[]) => {
       if(games != null) {
         this.games = games;
         this.newGames.next(this.games);
       }

    });
  }

  saveGame(game: Game){
    this.games.push(game);
    this.newGames.next(this.games);
    return this.http.put('https://game-library-6da4c.firebaseio.com/games.json',  this.games);

  }

  updateGame(id:number, game: Game){
    this.games[id] = game;
    this.newGames.next(this.games);
    return this.http.put('https://game-library-6da4c.firebaseio.com/games.json',  this.games);

  }


  getGame(id:number){
    return this.games[id];
  }

  rent(game:Game){
    this.rentService.rent(game);
  }
}
