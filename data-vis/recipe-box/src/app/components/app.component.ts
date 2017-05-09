import { Component } from '@angular/core';

import { Recipe } from './../model/recipe';

const RECIPES: Recipe[] = [
  {name: "recipe 1"},
  {name: "recipe 2"},
  {name: "recipe 3"},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe Box';
  recipes = RECIPES;
}
