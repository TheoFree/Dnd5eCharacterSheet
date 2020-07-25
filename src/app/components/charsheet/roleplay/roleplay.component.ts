import { Component, OnInit } from '@angular/core';
import { CharactersheetService } from 'src/app/services/charactersheet.service';

@Component({
  selector: 'app-charsheet-roleplay',
  templateUrl: './roleplay.component.html',
  styleUrls: ['./roleplay.component.scss']
})
export class RoleplayComponent implements OnInit {

  constructor(public css:CharactersheetService) { }

  ngOnInit(): void {
  }

}
