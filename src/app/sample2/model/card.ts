import { ICard } from '../interface';

// import { environment } from '../../../environments/environment';
import { shuffle, fillArray } from '../../helper/array';

const CARD_NAMES = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    'back'
];

// export const CARDS: Array<string> = CARD_NAMES.map(n => ({
//    name: n
    // flipped: false,
    // url: `${environment.deployUrl}assets/characters/2/${n}.png`
// }));

const CARDS_WITHOUT_BACK = CARD_NAMES.filter(name => name !== 'back');
export function backCards(): ICard  {
    const cardset = localStorage.getItem('selectedCardSet') ? localStorage.getItem('selectedCardSet') : '1';
    const url = '/assets/images/cards/back.png';
    return {
        name: 'back',
        flipped: false,
        url
    };
}
export function getGameCards(): Array<ICard>  {
    const shuffled = shuffle(CARDS_WITHOUT_BACK);
    const lv = localStorage.getItem('playLevel') || '1';
    const level = parseInt(lv);
    let choosed: any;
    let selOption = [0, 0];
    switch (level) {
        case 1: // 두개의 이미지 (2 * 6)
            selOption = [2, 6]; // 12 (4 * 3)
            break;
        case 2: // 3개의 이미지 (3 * 4)
            selOption = [3, 4]; // 12  (4 * 3)
            break;
        case 3: // 4개의 이미지 (4 * 3)
            selOption = [6, 2]; // 12  (4 * 3)
            break;
        default:
            selOption = [level + 3, 2];
            break;
    }

    choosed = shuffled.slice(0, selOption[0]); // shuffled 된 카드중 두개의 CARDS를 가져온다.

    const final = fillArray(choosed, selOption[1]); // give the same result as above;
    const cardset = localStorage.getItem('selectedCardSet') ? localStorage.getItem('selectedCardSet') : '1';
    const finalMap =  final.map((name, i) => {
        const url =  '/assets/characters/' + cardset + '/' + name + '.png';
        return {
            id: i,
            name,
            flipped: false,
            url
        };
    });
    return finalMap;
    /*
    return final.map((c, i) => ({
        _id: i,
        name: c.name,
        flipped: c.flipped,
        url: c.url
    }));
    */
}
