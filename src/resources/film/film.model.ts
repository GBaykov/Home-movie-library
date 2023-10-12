import { v4 as uuid } from 'uuid';
import { FilmType, OwnCategory } from '../../types';

export class Film implements FilmType {
  movieId: string;
  ownTitle: string;
  isWatched: string;
  ownDescription?: string;
  categoryId?: string;
  ownRate?: number;
  Year?: number;
  Plot?: string;
  Genre?: string;
  Title?: string;

  constructor({
    movieId = uuid(),
    isWatched,
    ownTitle,
    ownDescription,
    categoryId,
    ownRate,
    Year,
    Plot,
    Genre,
    Title,
  }: FilmType) {
    this.movieId = movieId;
    this.ownTitle = ownTitle;
    this.isWatched = isWatched;
    this.ownDescription = ownDescription;
    this.categoryId = categoryId;
    this.ownRate = ownRate;
    this.Year = Year;
    this.Plot = Plot;
    this.Genre = Genre;
    this.Title = Title;
  }
}
