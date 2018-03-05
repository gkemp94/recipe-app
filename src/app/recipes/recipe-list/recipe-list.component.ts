import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://images.unsplash.com/photo-1503767849114-976b67568b02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=834896599ce28318d8bc1500ad27112a&auto=format&fit=crop&w=1500&q=80'),
    new Recipe('A Test Recipe','This is simply a test','https://images.unsplash.com/photo-1503767849114-976b67568b02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=834896599ce28318d8bc1500ad27112a&auto=format&fit=crop&w=1500&q=80')
  ];

  constructor() { }

  ngOnInit() {
  }

}
