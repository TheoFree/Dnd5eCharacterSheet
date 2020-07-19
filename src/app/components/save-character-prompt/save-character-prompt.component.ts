import { Component, OnInit } from '@angular/core';
import { CharactersheetService } from 'src/app/services/charactersheet.service';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-save-character-prompt',
  templateUrl: './save-character-prompt.component.html',
  styleUrls: ['./save-character-prompt.component.scss']
})
export class SaveCharacterPromptComponent implements OnInit {

  constructor(public css:CharactersheetService) { }
  proceed(){
    this.css.setCharcterValuesNew();
    this.css.unsavedchanges = false;
    this.css.charsheet_selected= true;
  }
  ngOnInit(): void {
  }

}
