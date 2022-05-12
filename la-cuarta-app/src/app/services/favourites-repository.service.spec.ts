import { TestBed } from '@angular/core/testing';

import { FavouritesRepositoryService } from './favourites-repository.service';

describe('FavouritesRepositoryService', () => {
  let service: FavouritesRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritesRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
