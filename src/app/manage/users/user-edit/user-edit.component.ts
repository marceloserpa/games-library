import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../../../shared/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

@ViewChild('f') userForm: NgForm;
subscription: Subscription
editMode = false;
editItemIndex: number;
editItem: User;

constructor(private userService: UserService) { }

ngOnInit() {
  this.subscription = this.userService.startedEditing.subscribe((index: number) => {
    this.editMode = true;
    this.editItemIndex = index;
    this.editItem = this.userService.getUser(index);
    this.userForm.setValue({
      name: this.editItem.name,
      email: this.editItem.email
    })
  });
}

onSubmit(form: NgForm){
  const value = form.value;
  const user = new User(value.email, value.name);
  if(this.editMode) {
    this.userService.updateUser(this.editItemIndex, user);
  } else{
      this.userService.addUser(user);
  }
  this.onClear();

}

onClear(){
  this.userForm.reset();
  this.editMode = false;
}

onDelete(){
  this.userService.deleteUser(this.editItemIndex);
  this.onClear();
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
