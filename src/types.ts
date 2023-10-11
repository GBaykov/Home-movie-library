import { UUID } from 'crypto';

export type Film = {
  id: UUID;
  ownTitle: string;
  ownDescription?: string;
  ownCategory?: OwnCategory;
  ownRate: number | null;
  Year?: number;
  Plot?: string;
  Genre?: string;
  Title?: string;
};

export type OwnCategory = {
  id: UUID;
  title: string;
};
