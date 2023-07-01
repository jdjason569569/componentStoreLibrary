import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

type BooksState  = {
  wishList: string[];
  reading: string[];
  history: string[];
}

const initialState = {
  wishList: ['Oksi', 'The Pragmatic Programmer', 'Let My People Go Surfing'],
  reading: ['4000 Weeks'],
  history: ['Zero To One', 'Extreme Economies'],
};

@Injectable()
export class BooksStore extends ComponentStore<BooksState> {

  public wishList$: Observable<string[]> = this.select(
    (state) => state.wishList
  );
  public history$: Observable<string[]> = this.select(
    (state) => state.history
  );

  public read$: Observable<string[]> = this.select(
    (state) => state.reading
  );

  constructor() {
    super(initialState);
  }

  public moveToReading = this.updater((state, title: string) => ({
    ...state,
    wishList: [
      ...state.wishList.filter((titleInList) => titleInList !== title),
    ],
    reading: [...state.reading, title],
}));
}
