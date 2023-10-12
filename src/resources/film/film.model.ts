import { v4 as uuid } from 'uuid';
import { FilmType, OwnCategory } from '../../types';

export class Film implements FilmType {
  id: string;
  ownTitle: string;
  ownDescription?: string;
  categoryId?: string;
  ownRate?: number;
  Year?: number;
  Plot?: string;
  Genre?: string;
  Title?: string;

  constructor({
    id = uuid(),
    ownTitle,
    ownDescription,
    categoryId,
    ownRate,
    Year,
    Plot,
    Genre,
    Title,
  }: FilmType) {
    this.id = id;
    this.ownTitle = ownTitle;
    this.ownDescription = ownDescription;
    this.categoryId = categoryId;
    this.ownRate = ownRate;
    this.Year = Year;
    this.Plot = Plot;
    this.Genre = Genre;
    this.Title = Title;
  }
}
