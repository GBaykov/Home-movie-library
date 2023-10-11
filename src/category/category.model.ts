import { v4 as uuid } from 'uuid';
import { OwnCategory } from '../types';

export class Category implements OwnCategory {
  id: string;

  title: string;

  constructor({ id = uuid(), title }: OwnCategory) {
    this.id = id;
    this.title = title;
  }
}
