import { UUID } from 'crypto';

export type Film = {
  id: string;
  ownTitle: string;
  ownDescription?: string;
  ownCategory?: OwnCategory;
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
  films: Film[];
  categories: OwnCategory[];
};
