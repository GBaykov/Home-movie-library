import { DataBase, FilmType } from '../types';

const initialCategoryValue = { title: 'фантастика', id: '1' };

const initialFilmValue: FilmType = {
  ownTitle: 'звездные войны',
  id: '1',
  categoryId: initialCategoryValue.id,
};
const arr2 = {
  ownTitle: 'star_wars',
  id: '2',
  categoryId: '2',
};
const arr3 = {
  ownTitle: 'хоббит',
  id: '5',
  categoryId: '3',
};
const arr4 = {
  ownTitle: 'матрица',
  id: '8',
  categoryId: '1',
};

const DB: DataBase = {
  films: [initialFilmValue, arr2, arr3, arr4],
  categories: [initialCategoryValue],
};
export default DB;
