import { Injectable } from '@angular/core';
import { User } from '../../shared/user.model';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  static readonly API_USERS: string = "https://game-library-15c06.firebaseio.com/users.json";

  users:User[] = [];

  startedEditing =new Subject<number>();

  constructor(private http: Http ){

    this.fetchUsers().subscribe((users: User[]) => {
      this.users = users;
    })
  }

  getUsers(){
    return this.users;
  }

  fetchUsers(){
    return this.http.get(UserService.API_USERS)
    .map((resp: Response) => {
      const users: User[] = resp.json();
      if(users){
        this.users = users;
      }
      return users;
    });
  }

  getUser(index:number){
    return this.users[index];
  }

  addUser(user: User){
    this.users.push(user);
    this.saveOnServer();
  }

  updateUser(index: number, newUser: User){
    this.users[index] = newUser;
    this.saveOnServer();
}

  deleteUser(index: number){
    this.users.splice(index,1);
    this.saveOnServer();
  }

  private saveOnServer(){
    this.http.put(UserService.API_USERS, this.users).subscribe(() => {

    });
  }

}
