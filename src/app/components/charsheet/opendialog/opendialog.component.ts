import { Component, OnInit } from '@angular/core';
import { CharactersheetService } from 'src/app/services/charactersheet.service';
import { ReadVarExpr } from '@angular/compiler';
import { callbackify } from 'util';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-opendialog',
  templateUrl: './opendialog.component.html',
  styleUrls: ['./opendialog.component.scss']
})
export class OpendialogComponent implements OnInit {
  characterfile;
  file;
  constructor(public css:CharactersheetService) { }

  
  onFileChanged(event){
    console.log(event.target.files);
    const blob = new Blob([event.target.files[0]], {type:"application/json"})
    //this.characterfile; //= event.target.files;
    const fileReader = new FileReader();
    var filetext;
    console.log("readfileinitiated");
    
    //fileReader.onload =(e)=>{filetext=fileReader.result;}
    fileReader.addEventListener("load", e =>{
      if (typeof fileReader.result === 'string')console.log(e.target.result,filetext = JSON.parse(fileReader.result));
      //this.css.setCharacterValuesFirstPage( filetext.firstpage);
      this.css.firstPage=filetext.firstpage;
      this.css.spellbook=filetext.spells;
      this.css.charsheet_selected = true;
      
    })
    fileReader.readAsText(blob, "UTF-8");
    console.log("fileread");

    
  }
  ngOnInit(): void {
  }

}
