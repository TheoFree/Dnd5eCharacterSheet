import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceEvalService {
  inputString = "";
  outputString = "";
  resultVal = 0;
  opFlag = false;
  dFlag = false;
  opOne = false;
  opTwo = false;
  temp1 = "";
  temp2 = "";
  inputAdd = (val) => {
    this.inputString += val;
    return this.inputString;
  }
  inputDelete = () => {
    this.inputString = this.inputString.slice(0, -1);
    return this.inputString;
  }
  submit = ():[string,number] => {
    console.log("Input evaluation started...")
    var cursor = "";
    for (var i = 0; i < this.inputString.length; i++) {
      cursor = this.inputString[i];
      switch (true) {
        case (this.isNumber(cursor)): {
          this.temp1 += cursor;
          i==this.inputString.length?this.resultVal+=parseInt(this.temp1):null;
        }
        case (cursor == 'd'): {
          if (this.temp1) {
            this.temp2 = this.temp1;
            this.temp1 = "";
          }
          this.dFlag = true;

        }
        case (cursor == 'k' || cursor == 'K'): {
          if (this.dFlag) {
            if (this.temp1 && this.temp2){
              var currentKeeper;
              cursor=='k'?currentKeeper = Number.MAX_SAFE_INTEGER:0;
              for(var j=0;j<parseInt(this.temp2);j++){
                var temp = this.diceRoll(parseInt(this.temp1));
                currentKeeper =cursor=='k'?(temp<currentKeeper)?currentKeeper=temp:currentKeeper:(temp>currentKeeper)?currentKeeper=temp:currentKeeper
              }
            }
          }
        }



        default: {
          this.resultVal = 0;
          this.outputString = "";
          this.inputString = "";
          return [this.outputString,this.resultVal]
        }
      }
    }
    return [this.outputString,this.resultVal]
    
  }
  diceRoll = (dice: number): number => {
    return Math.floor(Math.random() * dice);
  }
  isNumber = (val): boolean => {
    return (val == '0' || val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' || val == '7' || val == '8' || val == '9')
  }
  constructor() { }
}
