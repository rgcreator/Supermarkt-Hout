import { Component } from '@angular/core';
import { Recipe } from '../recipes-model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
recepten: Recipe[] = [
new Recipe('houtballen', 'lekkere knapperige houtballen', '../assets/images/houtballen.jpg'),
]
}