import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { image } from '../../../node_modules 2/ansi-escapes';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../interfaces/recipe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  binding: any;
  localStorageValue: string|null ='';

  constructor(readonly recipeService: RecipesService, readonly router:Router){}
  addRecipeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    difficulty:new FormControl('', [Validators.required,Validators.minLength(3)]),
    image:new FormControl('', [Validators.required, Validators.minLength(3)]),
    prepTimeMinutes: new FormControl(0, [ Validators.required,Validators.min(0)]),
    cuisine:new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
  //  if (this.addRecipeForm.valid) console.log(this.addRecipeForm.value);
  //  else console.error('FORM IS NOT VALID');
  //  const jsonOB={
  //  a:12,
  //  height:180,
  //  test:{
  //    a:'another object',
  //  },
  //  array:['1',2, 4],
  // }
  // localStorage.setItem('theme', JSON.stringify(jsonOB));
  // sessionStorage.setItem('theme', 'light');
  // this.localStorageValue=localStorage.getItem('theme');

 if(this.addRecipeForm.valid){
  this.recipeService.addDBRecipes(
    this.addRecipeForm.value as Omit<Recipe, 'id'>
  );
 }

  }

  redirectToHomeComponent(){
    this.router.navigateByUrl('recipes');
  }
}
