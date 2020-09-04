import { Component, OnInit } from '@angular/core';
import { DiceEvalService } from 'src/app/services/dice-eval.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-diceroller',
  templateUrl: './diceroller.component.html',
  styleUrls: ['./diceroller.component.scss']
})
export class DicerollerComponent implements OnInit {
  inputString = "";
  result = 0;
  buttonRows = {
    row1 :['0','1','2','3','4','5'],
    row2 :['6','7','8','9','+','-'],
    row3 :['K','k','!','R','r']
  }
  inputAdd=(val)=> this.inputString = this.Eval.inputAdd(val);

  inputDelete=()=>this.inputString = this.Eval.inputDelete();

  submit=()=> [this.inputString,this.result] = this.Eval.submit();

  constructor(private Eval:DiceEvalService) { }

  ngOnInit(): void {
  }

}
