import { DataBase, FilmType, OwnCategory } from '../types';

const initialCategoryValue: OwnCategory = {
  title: 'фантастика',
  categoryId: '1',
};

const initialFilmValue: FilmType = {
  ownTitle: 'звездные войны',
  movieId: '1',
  categoryId: initialCategoryValue.categoryId,
  isWatched: 'true',
};
const arr2 = {
  ownTitle: 'star_wars',
  movieId: '2',
  categoryId: '2',
  isWatched: 'true',
};
const arr3 = {
  ownTitle: 'хоббит',
  movieId: '5',
  categoryId: '3',
  isWatched: 'false',
};
const arr4 = {
  ownTitle: 'матрица',
  movieId: '8',
  categoryId: '1',
  isWatched: 'false',
};

const DB: DataBase = {
  films: [initialFilmValue, arr2, arr3, arr4],
  categories: [initialCategoryValue],
};
export default DB;
