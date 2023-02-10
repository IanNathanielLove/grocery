import { TestBed } from '@angular/core/testing';

import { GroceryAppService } from './grocery_app.service';

describe('GroceryAppService', () => {
  let service: GroceryAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
