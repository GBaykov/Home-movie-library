import { v4 as uuid } from 'uuid';
import { FilmType, OwnCategory } from '../types';

export class Film implements FilmType {
  id: string;
  ownTitle: string;
  ownDescription?: string;
  ownCategory?: OwnCategory;
  ownRate?: number;
  Year?: number;
  Plot?: string;
  Genre?: string;
  Title?: string;

  constructor({
    id = uuid(),
    ownTitle,
    ownDescription,
    ownCategory,
    ownRate,
    Year,
    Plot,
    Genre,
    Title,
  }: FilmType) {
    this.id = id;
    this.ownTitle = ownTitle;
    this.ownDescription = ownDescription;
    this.ownCategory = ownCategory;
    this.ownRate = ownRate;
    this.Year = Year;
    this.Plot = Plot;
    this.Genre = Genre;
    this.Title = Title;
  }
}
