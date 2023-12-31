import { Component } from '@angular/core';
import { BooksStore } from '../book.store';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent {

  //allows to consume data if the observable changes
  read$ = this.booksStore.read$;

  constructor(private readonly booksStore: BooksStore) {}

}
