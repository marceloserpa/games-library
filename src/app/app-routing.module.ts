import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { GameComponent } from './game/game.component';
import { RentComponent } from './rent/rent.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameEditComponent } from './game/game-edit/game-edit.component';
import { GameStartComponent } from './game/game-start/game-start.component';
import { UsersComponent } from './manage/users/users.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GameComponent , children:[
      { path: '', component: GameStartComponent },
      { path: 'new', component: GameEditComponent},
      { path: ':id', component: GameDetailComponent},
      { path: ':id/edit', component: GameEditComponent}
    ]
  },
  { path: 'rent', component: RentComponent },
  { path: 'users', component: UsersComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
