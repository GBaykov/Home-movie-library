import { v4 as uuid } from 'uuid';
import { OwnCategory } from '../../types';

export class Category implements OwnCategory {
  categoryId: string;

  title: string;

  constructor({ categoryId = uuid(), title }: OwnCategory) {
    this.categoryId = categoryId;
    this.title = title;
  }
}
