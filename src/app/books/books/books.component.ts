import { Component } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BooksStore } from '../book.store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksStore]
})
export class BooksComponent {

}
