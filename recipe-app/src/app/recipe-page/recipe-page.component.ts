import { routes } from './../app.routes';
import { Component, inject, Input, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../interfaces/recipe.interface';
import { CommonModule } from '@angular/common';
import { db } from '../db/db';

@Component({
  selector: 'app-recipe-page',
  imports: [CommonModule],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss',
})
export class RecipePageComponent {
  readonly router = inject(ActivatedRoute);
  @Input() recipe!: Recipe;
}
