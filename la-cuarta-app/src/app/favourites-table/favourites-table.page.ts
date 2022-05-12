import { Component, OnInit } from '@angular/core';
import {FavouritesRepositoryService} from '../services/favourites-repository.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-favourites-table',
  templateUrl: './favourites-table.page.html',
  styleUrls: ['./favourites-table.page.scss'],
})
export class FavouritesTablePage implements OnInit {

  constructor(
    private favouritesRepo: FavouritesRepositoryService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

}
