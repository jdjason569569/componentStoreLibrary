import { Component } from '@angular/core';
import { BooksStore } from '../book.store';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {

  wishList$ = this.booksStore.wishList$;

  constructor(private readonly booksStore: BooksStore) {}

  handleClick(title: string) {
    this.booksStore.moveToReading(title);
}

}
