export class RentService {

  rentedGames = [];

  rent(game, user){
    this.rentedGames.push({game, user});
  }

  getRentedGames(){
    return this.rentedGames;
  }

}
