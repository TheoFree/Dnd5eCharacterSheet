import { Component, OnInit } from '@angular/core';
import { CharactersheetService } from 'src/app/services/charactersheet.service';

@Component({
  selector: 'app-charsheet-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(public css:CharactersheetService) { }

  ngOnInit(): void {
  }

}
