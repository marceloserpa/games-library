import { Component, OnInit } from '@angular/core';
import { RentService } from '../rent.service'

@Component({
  selector: 'app-rented-list',
  templateUrl: './rented-list.component.html',
  styleUrls: ['./rented-list.component.css']
})
export class RentedListComponent implements OnInit {

  rentedGames;

  constructor(private rentService: RentService) { }

  ngOnInit() {
    this.rentedGames = this.rentService.getRentedGames();
  }
}
