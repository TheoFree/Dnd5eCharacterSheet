import { Component, OnInit } from '@angular/core';
import { CharactersheetService } from 'src/app/services/charactersheet.service';
import { CssSelector } from '@angular/compiler';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.scss']
})
export class CharsheetComponent implements OnInit {
  displayCharacterSheet:boolean = true;
  saveCharacter:boolean=false;
  savename:string="";
  constructor(public css:CharactersheetService) {}
   newChar:Boolean = this.css.charsheet_selected;
   downloadcharSheet():void{
    var dataSTR = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({firstpage:this.css.firstPage,spells:this.css.spellbook}));
    var downloadElement = document.createElement('a');
    downloadElement.setAttribute("href", dataSTR);
    downloadElement.setAttribute("download", this.savename +".json");
    document.body.appendChild(downloadElement);
    downloadElement.click();
    downloadElement.remove();
    this.saveCharacter=!this.saveCharacter;
  }  
  ngOnInit(): void {


  }

}
