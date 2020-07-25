import { Component, OnInit } from '@angular/core';
import { CharactersheetService } from 'src/app/services/charactersheet.service';

@Component({
  selector: 'app-charsheet-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {

  constructor(public css:CharactersheetService) { }
  public healValue:number=0;
  public damageValue:number=0;
  heal(){
    if(this.healValue+this.css.firstPage.health_current<this.css.firstPage.health_maximum)this.css.firstPage.health_current+=this.healValue;
    else this.css.firstPage.health_current = this.css.firstPage.health_maximum;
  }
  damage(){
    if(this.css.firstPage.health_current-this.damageValue>=0)this.css.firstPage.health_current-=this.damageValue;
    if(this.damageValue>this.css.firstPage.health_maximum)alert("Your character is Dead with a capitol D. Better find a gooood healer")
  }
  ngOnInit(): void {
  }

}
