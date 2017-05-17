export class RentService {

  rentedGames = [];

  rent(game){
    this.rentedGames.push(game);
  }

  getRentedGames(){
    return this.rentedGames;
  }

}
