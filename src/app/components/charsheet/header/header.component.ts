import { Component, OnInit, Input } from '@angular/core';
import { CharactersheetService } from 'src/app/services/charactersheet.service';

@Component({
  selector: 'app-charsheet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public css:CharactersheetService) { }
  

  ngOnInit(): void {

  }

}
