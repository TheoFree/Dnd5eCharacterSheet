import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharsheetComponent } from './components/charsheet/charsheet.component';
import { DicerollerComponent } from './components/diceroller/diceroller.component';


const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'character',
    component: CharsheetComponent,
  },
  {
    path: 'diceroller',
    component: DicerollerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
