import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CoursesListComponent, ProductListComponent, BooksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
