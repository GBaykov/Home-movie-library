import { UUID } from 'crypto';

export type FilmType = {
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
};

export type OwnCategory = {
  categoryId: string;
  title: string;
};

export type DataBase = {
  films: FilmType[];
  categories: OwnCategory[];
};
