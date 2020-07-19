import { Component, OnInit } from '@angular/core';
import { CharactersheetService } from 'src/app/services/charactersheet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor(public css:CharactersheetService) { }
  setTrue(){
    this.css.charsheet_selected=true;
  }
  setFalse(){
    this.css.charsheet_selected=false;
  }
  checkUnsavedChanges(){
    if(this.css.firstPage.name != "")this.css.unsavedchanges = true;

  }
  ngOnInit(): void {
  }

}
