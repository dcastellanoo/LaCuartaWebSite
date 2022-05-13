import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {Platform} from '@ionic/angular';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SqlCrudService {
  readonly  dbName: string = 'favourites.db';
  readonly dbTable: string = 'favouritesTable';

  favourites: Array<any>;

  private dbInstance: SQLiteObject;


  constructor(
    private platform: Platform,
    private sqlite: SQLite
  ) {
    this.databaseConn();
  }

  // Create new favourite
  addFavourite(productId, userId) {
    console.log('Trying to add new favourite:', productId, 'for user', userId);
    // validation
    if ( !productId || !userId ) {
      console.log('Provide valid product and user.');
      return;
    }

    this.dbInstance.executeSql(`
INSERT INTO ${this.dbTable} (product_id, user_id) VALUES ('${productId}', '${userId}')`, [])
      .then(() => {
        console.log('Success');
        this.getAllFavourites();
      }, (e) => { alert(JSON.stringify(e.err)); });
  }

  getAllFavourites() {
    return this.dbInstance.executeSql(`
SELECT * FROM ${this.dbTable}`, []).then((res) => {
      this.favourites = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.favourites.push(res.rows.item(i));
        }
        return this.favourites;
      }
    },(e) => {
      alert(JSON.stringify(e));
    });
  }

  // Get all favourites for selected user
  getAllFavouritesForUser(userId) {
    return this.dbInstance.executeSql(`
SELECT * FROM ${this.dbTable} WHERE user_id = ?`, [userId]).then((res) => {
      this.favourites = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.favourites.push(res.rows.item(i));
        }
        return this.favourites;
      }
    },(e) => {
      alert(JSON.stringify(e));
    });
  }

  /*
  // Update selected user
  updateUser(id, name, email) {
    const data = [name, email];
    return this.dbInstance.executeSql(`UPDATE ${this.db_table}
SET name = ?, email = ? WHERE user_id = ${id}`, data);
  }
  */

  // Delete selected favourite product
  deleteFavourite(favouriteId) {
    this.dbInstance.executeSql(`
DELETE FROM ${this.dbTable} WHERE favourite_id = ${favouriteId}`, [])
      .then(() => {
        console.log('Favourite deleted!');
        this.getAllFavourites();
      })
      .catch(e => {
        alert(JSON.stringify(e));
      });
  }


  // Create SQLite database
  private databaseConn() {
    this.platform.ready().then(() => {
      this.sqlite.create({name: this.dbName, location: 'default'})
        .then((sqLite: SQLiteObject) => {
          this.dbInstance = sqLite;
          sqLite.executeSql(`
CREATE TABLE IF NOT EXISTS ${this.dbTable} (
favourite_id INTEGER PRIMARY KEY,
product_id varchar(255), user_id varchar(255))`, [] )
            .then((res) => { console.log(JSON.stringify(res)); } )
            .catch((error) => alert(JSON.stringify(error)));
        })
        .catch((error) => alert(JSON.stringify(error)));
    });
  }

}
