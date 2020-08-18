import { TestBed } from '@angular/core/testing';

import { DiceEvalService } from './dice-eval.service';

describe('DiceEvalService', () => {
  let service: DiceEvalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceEvalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
