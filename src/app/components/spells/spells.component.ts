import { Component, OnInit } from '@angular/core';
import { CharactersheetService } from 'src/app/services/charactersheet.service';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {

  constructor(public css: CharactersheetService) { }
  selectedSpellLevel: number = 1;
  previousSpellLevel: number = 1;
  cantrip = {
    newCantripName: "",
    newCantripSchool: "",
    newCantripCast: "",
    newCantripDuration: "",
    newCantripRange: "",
    newCantripComponents: "",
    newCantripRitual: "",
    newCantripConcentration: "",
    newCantripDesc: "",

  }
  spell = {
    newSpellName: "",
    newSpellSchool: "",
    newSpellCast: "",
    newSpellDuration: "",
    newSpellRange: "",
    newSpellComponents: "",
    newSpellRitual: "",
    newSpellConcentration: "",
    newSpellDesc: "",

  }
  deleteCantripName = "";
  deleteSpellName = "";
  selectedSpellBook = this.css.spellbook.firstLvl;
  selectedSpellSlots: number = 0;
  selectedSpellSlotsMax: number = 0;
  addCantrip = () => {

    var spell = {
      name: this.cantrip.newCantripName,
      school: this.cantrip.newCantripSchool,
      castingTime: this.cantrip.newCantripCast,
      castingDuration: this.cantrip.newCantripDuration,
      castingRange: this.cantrip.newCantripRange,
      ritual: this.cantrip.newCantripRitual,
      concentration: this.cantrip.newCantripConcentration,
      description: this.cantrip.newCantripDesc,
      components: this.cantrip.newCantripComponents

    }
    this.css.spellbook.cantrips.push(spell)

    //console.log("Added" + this.newSpellName)
    this.clearCantrip();
  }
  clearCantrip() {


    this.cantrip.newCantripName = "";
    this.cantrip.newCantripSchool = "";
    this.cantrip.newCantripCast = "";
    this.cantrip.newCantripDuration = "";
    this.cantrip.newCantripRange = "";
    this.cantrip.newCantripRitual = "";
    this.cantrip.newCantripConcentration = "";
    this.cantrip.newCantripDesc = "";
    this.cantrip.newCantripComponents = "";



  }
  addSpell() {
    var spell = {
      name: this.spell.newSpellName,
      school: this.spell.newSpellSchool,
      castingTime: this.spell.newSpellCast,
      castingDuration: this.spell.newSpellDuration,
      castingRange: this.spell.newSpellRange,
      ritual: this.spell.newSpellRitual,
      concentration: this.spell.newSpellConcentration,
      description: this.spell.newSpellDesc,
      components: this.spell.newSpellComponents

    }    
    switch (this.selectedSpellLevel) {
      case 1:
        this.css.spellbook.firstLvl.push(spell);
        break;
      case 2:
        this.css.spellbook.secondLvl.push(spell);
        break;
      case 3:
        this.css.spellbook.thirdLvl.push(spell);
        break;
      case 4:
        this.css.spellbook.fourthLvl.push(spell);
        break;
      case 5:
        this.css.spellbook.fifthLvl.push(spell);
        break;
      case 6:
        this.css.spellbook.sixthLvl.push(spell);
        break;
      case 7:
        this.css.spellbook.seventhLvl.push(spell);
        break;
      case 8:
        this.css.spellbook.eigthLvl.push(spell);
        break;
      case 9:
        this.css.spellbook.ninthLvl.push(spell);
        break;
    }
    this.clearSpell();
  }
  clearSpell(){
    this.spell.newSpellName = "";
    this.spell.newSpellSchool = "";
    this.spell.newSpellCast = "";
    this.spell.newSpellDuration = "";
    this.spell.newSpellRange = "";
    this.spell.newSpellRitual = "";
    this.spell.newSpellConcentration = "";
    this.spell.newSpellDesc = "";
    this.spell.newSpellComponents = "";

  }
  deleteCantrip() {
    for (var i = 0; i < this.css.spellbook.cantrips.length; i++) {
      if (this.css.spellbook.cantrips[i].name == this.deleteCantripName) {
        this.css.spellbook.cantrips.splice(i, 1); break;
      }

    }
    this.deleteCantripName = "";
  }
  deleteSpell(){
    var spellbook;
    switch (this.selectedSpellLevel) {
      case 1:
        spellbook = this.css.spellbook.firstLvl;
        break;
      case 2:
        spellbook = this.css.spellbook.secondLvl;
        break;
      case 3:
        spellbook = this.css.spellbook.thirdLvl;
        break;
      case 4:
        spellbook =  this.css.spellbook.fourthLvl;
        break;
      case 5:
        spellbook = this.css.spellbook.fifthLvl;
        break;
      case 6:
        spellbook = this.css.spellbook.sixthLvl;
        break;
      case 7:
        spellbook = this.css.spellbook.seventhLvl;
        break;
      case 8:
        spellbook = this.css.spellbook.eigthLvl;
        break;
      case 9:
        spellbook = this.css.spellbook.ninthLvl;
        break;
    }
    for (var i = 0; i < spellbook.length; i++) {
      if (spellbook[i].name == this.deleteSpellName) {
        spellbook.splice(i, 1); break;
      }

    }
    this.deleteSpellName = "";
  }
  selectSpellBook(selectedSpellLevel) {
    switch (this.previousSpellLevel) {
      case (1): {
        this.css.spellbook.firstLvl = this.selectedSpellBook; 
        this.css.spellbook.firstSlots = this.selectedSpellSlots;
        this.css.spellbook.firstSlotsTotal = this.selectedSpellSlotsMax;
        break;
      }
      case (2): {
        this.css.spellbook.secondLvl = this.selectedSpellBook;
        this.css.spellbook.secondSlots = this.selectedSpellSlots;
        this.css.spellbook.secondSlotsTotal = this.selectedSpellSlotsMax;
        break;
      }
      case (3): {
        this.css.spellbook.thirdLvl = this.selectedSpellBook;
        this.css.spellbook.thirdSlots = this.selectedSpellSlots;
        this.css.spellbook.thirdSlotsTotal = this.selectedSpellSlotsMax;
        break;
      }
      case (4): {
        this.css.spellbook.fourthLvl = this.selectedSpellBook;
        this.css.spellbook.fourthSlots = this.selectedSpellSlots;
        this.css.spellbook.fourthSlotsTotal = this.selectedSpellSlotsMax;
        break;
      }
      case (5): {
        this.css.spellbook.fifthLvl = this.selectedSpellBook;
        this.css.spellbook.fifthSlots = this.selectedSpellSlots;
        this.css.spellbook.fifthSlotsTotal = this.selectedSpellSlotsMax;
        break;
      }
      case (6): {
        this.css.spellbook.sixthLvl = this.selectedSpellBook;
        this.css.spellbook.sixthSlots = this.selectedSpellSlots;
        this.css.spellbook.sixthSlotsTotal = this.selectedSpellSlotsMax;
        break;
      }
      case (7): {
        this.css.spellbook.seventhLvl = this.selectedSpellBook;
        this.css.spellbook.seventhSlots = this.selectedSpellSlots;
        this.css.spellbook.seventhSlotsTotal = this.selectedSpellSlotsMax;
        break;
      }
      case (8): {
        this.css.spellbook.eigthLvl = this.selectedSpellBook ;
        this.css.spellbook.eigthSlots = this.selectedSpellSlots;
        this.css.spellbook.eigthSlotsTotal=this.selectedSpellSlotsMax  ;
        break;
      }
      case (9): {
        this.css.spellbook.ninthLvl=this.selectedSpellBook;
        this.css.spellbook.ninthSlots = this.selectedSpellSlots;
        this.css.spellbook.ninthSlotsTotal = this.selectedSpellSlotsMax;
        break;
      }
    }
    switch (selectedSpellLevel) {
      case (1): {
        this.selectedSpellBook = this.css.spellbook.firstLvl;
        this.selectedSpellSlots = this.css.spellbook.firstSlots;
        this.selectedSpellSlotsMax = this.css.spellbook.firstSlotsTotal;
        this.selectedSpellLevel = 1;
        break;
      }
      case (2): {
        this.selectedSpellBook = this.css.spellbook.secondLvl;
        this.selectedSpellSlots = this.css.spellbook.secondSlots;
        this.selectedSpellSlotsMax = this.css.spellbook.secondSlotsTotal;
        this.selectedSpellLevel = 2;
        break;
      }
      case (3): {
        this.selectedSpellBook = this.css.spellbook.thirdLvl;
        this.selectedSpellSlots = this.css.spellbook.thirdSlots;
        this.selectedSpellSlotsMax = this.css.spellbook.thirdSlotsTotal;
        this.selectedSpellLevel = 3;
        break;
      }
      case (4): {
        this.selectedSpellBook = this.css.spellbook.fourthLvl;
        this.selectedSpellSlots = this.css.spellbook.fourthSlots;
        this.selectedSpellSlotsMax = this.css.spellbook.fourthSlotsTotal;
        this.selectedSpellLevel = 4;
        break;
      }
      case (5): {
        this.selectedSpellBook = this.css.spellbook.fifthLvl;
        this.selectedSpellSlots = this.css.spellbook.fifthSlots;
        this.selectedSpellSlotsMax = this.css.spellbook.fifthSlotsTotal;
        this.selectedSpellLevel = 5;
        break;
      }
      case (6): {
        this.selectedSpellBook = this.css.spellbook.sixthLvl;
        this.selectedSpellSlots = this.css.spellbook.sixthSlots;
        this.selectedSpellSlotsMax = this.css.spellbook.sixthSlotsTotal;
        this.selectedSpellLevel = 6;
        break;
      }
      case (7): {
        this.selectedSpellBook = this.css.spellbook.seventhLvl;
        this.selectedSpellSlots = this.css.spellbook.seventhSlots;
        this.selectedSpellSlotsMax = this.css.spellbook.seventhSlotsTotal;
        this.selectedSpellLevel = 7;
        break;
      }
      case (8): {
        this.selectedSpellBook = this.css.spellbook.eigthLvl;
        this.selectedSpellSlots = this.css.spellbook.eigthSlots;
        this.selectedSpellSlotsMax = this.css.spellbook.eigthSlotsTotal;
        this.selectedSpellLevel = 8;
        break;
      }
      case (9): {
        this.selectedSpellBook = this.css.spellbook.ninthLvl;
        this.selectedSpellSlots = this.css.spellbook.ninthSlots;
        this.selectedSpellSlotsMax = this.css.spellbook.ninthSlotsTotal;
        this.selectedSpellLevel = 9;
        break;
      }
    }
    this.previousSpellLevel = selectedSpellLevel;
  }
  ngOnInit(): void {
    this.selectSpellBook(1);
  }

}
