import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { ShoppingListEditComponent } from 'src/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from 'src/shopping-list/shopping-list/shopping-list.component';
import { RecipeListComponent } from 'src/recipe-book/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
