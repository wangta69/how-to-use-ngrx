import { STATUS } from './status';
import { ICard } from './ICard';

export interface IState {
  remains?: number;
  highestScore?: number;
  status?: STATUS;
  cards?: ICard[];
  lastSelectedCard?: ICard;
  elapsedMs?: number;
  remaindMs?: number;
  level?: number;
  maxLevel?: number;
  score?: number;
}
