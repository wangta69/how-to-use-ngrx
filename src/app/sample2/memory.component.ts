import { Component, OnInit } from '@angular/core';
import { getGameCards } from './model/card';
import { ICard } from './interface';
// import { select } from '@angular-redux/store';
// import { Observable } from 'rxjs';
// import { MatDialog } from '@angular/material/dialog'; // , MatDialogConfig
// import { AdMobService } from '../services/cap-admob.service';
//
// import { GameActions } from '../store/action';
// import { STATUS } from '../store/interface';
// import { stop } from '../helper/event';
//
// import { FinishedDialogComponent } from './finished-dialog/finished-dialog.component';
// import { GameOverDialogComponent } from './gameover-dialog/gameover-dialog.component';
// import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
// import { CountAnimation } from './count.animation';

// export interface Cards {
//   value: string;
//   viewValue: string;
// }

@Component({
    selector: 'app-memory-game',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss'],
    // animations: [
    //     CountAnimation
    // ]
})

export class MemoryComponent implements OnInit {
    cards: ICard[];

    // @select() status$!: Observable<number>;
    // @select() remaindMs$!: Observable<number>;
    //
    // @select() remains$!: Observable<number>;
    // @select() highestScore$!: Observable<number>;
    // @select() score$!: Observable<number>;
    // @select() level$!: Observable<number>;
    // status: STATUS;
    // statusEnum: STATUS;
    // hideFrontScreen = true;
    // showCountScreen = false;
    // countState = 'inactive';
    // counterTimer = 3;
    // counterTimerToken: any;
    // selectedCardSet: string | any;
    // selectedCardSetEnable: boolean | any; // STATUS.READY 일때만 활성화 시킨다.
    // cards: Cards[] = [
    //     {value: '1', viewValue: 'Character'},
    //     {value: '2', viewValue: 'Foods'}
    // ];

    constructor(
        // private actions: GameActions,
        // private dialog: MatDialog,
        // private admobService: AdMobService,
    ) {
        this.cards = getGameCards();
        console.log(this.cards);
    }

    ngOnInit(): void {
    //     this.selectedCardSet = localStorage.getItem('selectedCardSet') ? localStorage.getItem('selectedCardSet') : '1';
    //     const statusEnum = STATUS;
    //
    //     this.remains$.subscribe((status: number) => {
    //         console.log('this.remains$.subscrib', status);
    //     });
    //
    //     this.status$.subscribe((status: number) => {
    //
    //         console.log('memory.component', status);
    //         this.hideFrontScreen = true;
    //         this.showCountScreen = false;
    //         this.selectedCardSetEnable = false;
    //
    //         if (status === statusEnum.READY) {
    //             this.selectedCardSetEnable = true;
    //             this.hideFrontScreen = false;
    //         }
    //
    //         if (status === statusEnum.FLIPALLOPEN) {
    //             this.showCountScreen = true;
    //         }
    //
    //         if (status === statusEnum.PASS) {
    //             // good 알림창 띄우기
    //             setTimeout(() => {
    //                 this.dialog
    //                 .open(FinishedDialogComponent,
    //                     {
    //                         disableClose: true,
    //                         width: '80%',
    //                     }
    //                 )
    //                 .afterClosed()
    //                 .subscribe((result: any) => {
    //                     this.actions.updateLevel(result);
    //                     this.actions.reset();
    //                 });
    //             }, 500);
    //
    //         } else if (status === statusEnum.FAIL) {
    //             // good 알림창 띄우기
    //             setTimeout(() => {
    //                 this.dialog
    //                 .open(GameOverDialogComponent,
    //                     {
    //                         disableClose: true,
    //                         width: '80%'
    //                     }
    //                 )
    //                 .afterClosed()
    //                 // .subscribe(() => this.generate());
    //                 .subscribe((result: any) => {
    //                     switch (result) {
    //                     case 'ad':
    //                         this.admobService.rewardVideo();
    //                         this.actions.updateStatus(STATUS.READY);
    //                         this.actions.reset();
    //                         break;
    //                     }
    //                 });
    //             }, 500);
    //         }
    //     });
    //
    //     this.actions.updateStatus(STATUS.READY);
    //     this.actions.reset();
    }
    //
    // reset(e: Event): void {
    //     stop(e);
    //     this.actions.reset();
    // }
    //
    // gotoMenu(): void {
    //     this.dialog
    //     .open(MenuDialogComponent,
    //         {
    //             disableClose: true,
    //             maxWidth: '100vw',
    //             width: '100vw',
    //             height: '100vh',
    //             panelClass: 'full-screen-modal'
    //         }
    //     )
    //     .afterClosed()
    //     .subscribe((result: any) => {
    //         if (result) {
    //             this.actions.updateStatus(STATUS.READY);
    //             setTimeout(() => {
    //                 this.actions.playLevel(result);
    //             }, 500);
    //
    //         }
    //     });
    // }
    // /**
    //  * 3초동안 모든 이미지를 보여주고 닫은 후 프레이를 한다.
    //  */
    // startGame(): void {
    //     this.actions.updateStatus(STATUS.FLIPALLOPEN);
    //     this.countState = 'active';
    //     this.startCountDown();
    // }
    //
    // private startCountDown(): void {
    //     this.counterTimer = 3;
    //     this.counterTimerToken = setInterval(() => {
    //         this.countState = 'inactive';
    //         setTimeout(() => { // 3초후에 카드를 제자리고 돌린다.
    //             this.countState = 'active';
    //         }, 0);
    //         this.counterTimer--;
    //         if (this.counterTimer === 0) {
    //             clearInterval(this.counterTimerToken);
    //             this.counterTimer = 3;
    //             this.actions.updateStatus(STATUS.FLIPALLCLOSE);
    //             this.actions.updateStatus(STATUS.PLAYING);
    //         }
    //     }, 1000);
    // }
    //
    // public cardSetChange(e: any): void {
    //     // 로컬 스토리지에 저장
    //     localStorage.setItem('selectedCardSet', e.value);
    //     // 카드 섹션을 다시 불러온다.
    //     this.actions.reset();
    //
    // }


}
