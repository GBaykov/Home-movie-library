import { UUID } from 'crypto';

export type FilmType = {
  id: string;
  ownTitle: string;
  ownDescription?: string;
  categoryId?: string;
  ownRate?: number;
  Year?: number;
  Plot?: string;
  Genre?: string;
  Title?: string;
};

export type OwnCategory = {
  id: string;
  title: string;
};

export type DataBase = {
  films: FilmType[];
  categories: OwnCategory[];
};
