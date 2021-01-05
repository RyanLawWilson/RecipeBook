import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Scrambled Egg", "How to make a scrambled egg", "https://pixnio.com/free-images/food-and-drink/pizza/pizza-725x486.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
