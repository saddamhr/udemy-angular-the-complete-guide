import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from './../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-768x1152.jpg'),
    new Recipe('An Test Recipe', 'This is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-768x1152.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
