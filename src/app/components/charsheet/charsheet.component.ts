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
  setSheetValues($event){
    
  }
  constructor(public css:CharactersheetService) {}
   newChar:Boolean = this.css.charsheet_selected;
   downloadcharSheet():void{
    var dataSTR = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.css.firstPage));
    var downloadElement = document.createElement('a');
    downloadElement.setAttribute("href", dataSTR);
    downloadElement.setAttribute("download", this.css.firstPage.name +".json");
    document.body.appendChild(downloadElement);
    downloadElement.click();
    downloadElement.remove();
  }  
  ngOnInit(): void {


  }

}
