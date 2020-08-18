import { Component, OnInit } from '@angular/core';
import { DiceEvalService } from 'src/app/services/dice-eval.service';

@Component({
  selector: 'app-diceroller',
  templateUrl: './diceroller.component.html',
  styleUrls: ['./diceroller.component.scss']
})
export class DicerollerComponent implements OnInit {

  constructor(private Eval:DiceEvalService) { }

  ngOnInit(): void {
  }

}
