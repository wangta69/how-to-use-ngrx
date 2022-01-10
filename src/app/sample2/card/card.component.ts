import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
// import { backCards } from '../../store/model/card';
// import { ICard, STATUS } from '../../store/interface';
// import { select } from '@angular-redux/store';
// import { Observable } from 'rxjs';
// import { Haptics } from '@capacitor/haptics';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  // @Input() info!: ICard;
  // @select() status$!: Observable<number>;

  @Output() flipped = new EventEmitter();

  // backCard: ICard;
  cardStyles = {'min-width': '100px', 'min-height': '121px'};

  cardFlipped: boolean = false;
  @HostListener('window:resize', []) // 아래 onResize 와 붙어 있어야 함
  onResize() {
    this.cardResize();
  }
  constructor(
      // private vibration: Vibration
  ) {
    // this.backCard = backCards();
    this.cardResize();

    // 초기 시작시 모든 카드를 오픈 한다.
    // this.status$.subscribe((status: number) => {
    //     if (status === STATUS.FLIPALLOPEN) {
    //         this.cardFlipped = true;
    //     }
    //
    //     if (status === STATUS.FLIPALLCLOSE) {
    //         this.cardFlipped = false;
    //     }
    // });
  }

    private cardResize() {
        const lv = localStorage.getItem('playLevel') || '1';
        const level = parseInt(lv);
        let cardWidth = 70;
        if (window.innerWidth <= 360) { // OK
            cardWidth = (window.innerWidth / 4) - 12;
        } else if (window.innerWidth <= 450) { // OK
            cardWidth = (window.innerWidth / 5) + 5;
        } else if (window.innerWidth <= 660) { // OK
            cardWidth = (window.innerWidth / 6);
        } else { // OK
            cardWidth = (window.innerWidth / 7);
        }

        if (level >= 6 && level < 10) { // 5줄이므로
            cardWidth = cardWidth - cardWidth / 4; // 왜 이렇게 하는지 나도모름.. 걍 화면 보면서
        } else if (level >= 10) { // 5줄이므로
            cardWidth = cardWidth - cardWidth / 2; // 왜 이렇게 하는지 나도모름.. 걍 화면 보면서
        }

        const cardHeight = 1.2 * cardWidth; //  84 * cardWidth / 70
        this.cardStyles = {'min-width': cardWidth + 'px', 'min-height': cardHeight + 'px'};
  }

    // public flip(info: ICard) {
    //     Haptics.vibrate({duration: 20});
    //     if (info.flipped) {
    //         return;
    //     }
    //     this.flipped.emit(info);
    // }
}
