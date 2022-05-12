import { TestBed } from '@angular/core/testing';

import { SqlCrudService } from './sql-crud.service';

describe('SqlCrudService', () => {
  let service: SqlCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
