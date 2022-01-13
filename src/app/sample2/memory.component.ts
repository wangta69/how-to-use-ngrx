import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICard } from './interface';
import { setCards, flip } from './reducer/card.action';
import { selectCardCollection } from './reducer/card.selecltions';
import { getGameCards } from './model/card';


@Component({
    selector: 'app-memory-game',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss'],
    // animations: [
    //     CountAnimation
    // ]
})

export class MemoryComponent implements OnInit {
    // cards: ICard[];
    cards$ = this.store.select(selectCardCollection);
    // fliped$ = this.store.select(flipedCard);

    constructor(
        // private actions: GameActions,
        private store: Store
    ) {
        const cards = getGameCards();
        // console.log(cards);
        this.store.dispatch(setCards({ cards }));

        this.cards$.subscribe(res => console.log('this.cards$ subscribe: ', res));
        // this.fliped$.subscribe(res => console.log('fliped: ', res));
        // console.log(this.cards);
    }

    ngOnInit(): void {

    }

    // Action
    public flipCard(flipCard: ICard) {
        console.log('public flipCard:', flipCard);
        this.store.dispatch(flip({ flipCard }));
    }

    public trackByCards(card: ICard | any) {
        return card.id;

    }



}
