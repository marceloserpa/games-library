import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game } from 'app/game/game.model';
import { UserService } from 'app/manage/users/user.service';
import { User } from 'app/shared/user.model';
import { RentService } from 'app/rent/rent.service';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {

  @ViewChild('f') rentForm: NgForm;
  @Input() game: Game;

  users : User[] = [];
  userRent : User;

  constructor(private rentService :RentService, private userService :UserService) { }

  ngOnInit(){
    this.userService.fetchUsers();
    this.users = this.userService.getUsers();
  }

  onSubmit(form: NgForm){
    const value = form.value;
    this.game.returnDate = value.returnDate;
    this.rentService.rent(this.game, value.user);
  }

}
