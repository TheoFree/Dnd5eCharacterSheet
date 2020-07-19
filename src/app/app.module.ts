import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { CharsheetComponent } from './components/charsheet/charsheet.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/charsheet/header/header.component';
import { StatsComponent } from './components/charsheet/stats/stats.component';
import { CombatComponent } from './components/charsheet/combat/combat.component';
import { RoleplayComponent } from './components/charsheet/roleplay/roleplay.component';
import { CharactersheetService } from './services/charactersheet.service';
import { OpendialogComponent } from './components/charsheet/opendialog/opendialog.component';
import { SaveCharacterPromptComponent } from './components/save-character-prompt/save-character-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    CharsheetComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    StatsComponent,
    CombatComponent,
    RoleplayComponent,
    OpendialogComponent,
    SaveCharacterPromptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [CharactersheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
