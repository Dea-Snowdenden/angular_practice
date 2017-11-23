import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeNewComponent } from './recipe-new/recipe-new.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
