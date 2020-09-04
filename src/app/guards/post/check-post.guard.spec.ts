import { TestBed } from '@angular/core/testing';

import { CheckPostGuard } from './check-post.guard';

describe('CheckPostGuard', () => {
  let guard: CheckPostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckPostGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
