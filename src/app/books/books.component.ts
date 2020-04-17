import { Component, OnInit, Input } from '@angular/core';
import { Books } from './books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Books[];

  booksRomance: Books[] = [
    {bookId:1, name: 'romance1'},
    {bookId:2, name: 'romance2'},
    {bookId:3, name: 'romance3'}
    ];

  booksMistery: Books[] = [
    {bookId:1, name: 'mistery1'},
    {bookId:2, name: 'mistery2'},
    {bookId:3, name: 'mistery3'}
    ];

  booksDetecives: Books[] = [
    {bookId:1, name: 'detectives1'},
    {bookId:2, name: 'detectives2'},
    {bookId:3, name: 'detectives3'}
    ];


  category:string;

  @Input() set dropDownBookByCategory(category:string){
    this.category = category;
   console.log('dropDownBookByCategory ' + category);
    if(category === 'romance')
      this.books = this.booksRomance; 

    if(category === 'mistery')
      this.books = this.booksMistery;

    if(category === 'detectives')
      this.books = this.booksDetecives;

  } 

  constructor() { }

  ngOnInit() {
  }

}