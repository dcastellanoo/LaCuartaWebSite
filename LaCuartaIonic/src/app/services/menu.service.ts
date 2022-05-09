import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SelectedCategoryService {
  private selectedCategory: string = "Entrantes";
  private comeInChild: boolean = false;
  constructor() {
  }

  public getComeInChild(): boolean {
    return this.comeInChild;
  }

  public getCategory(): string {
    return this.selectedCategory;
  }

  public setCategory(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;
    console.log(this.selectedCategory);
  }

  public setComeInChild(comeInChild: boolean): void {
    this.comeInChild = comeInChild;
  }
}
