import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { RentComponent } from './rent/rent.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameItemComponent } from './game/game-list/game-item/game-item.component';
import { RentService } from './rent/rent.service';
import { RentedListComponent } from './rent/rented-list/rented-list.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { GameEditComponent } from './game/game-edit/game-edit.component';
import { GameStartComponent } from './game/game-start/game-start.component';
import { UsersComponent } from './manage/users/users.component';
import { UserEditComponent } from './manage/users/user-edit/user-edit.component';
import { UserService } from './manage/users/user.service';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    RentComponent,
    GameListComponent,
    GameDetailComponent,
    GameItemComponent,
    RentedListComponent,
    DropDownDirective,
    GameEditComponent,
    GameStartComponent,
    UsersComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RentService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
