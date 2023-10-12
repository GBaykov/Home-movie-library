import { DataBase, FilmType } from '../types';

const initialCategoryValue = { title: 'фантастика', id: '1' };

const initialFilmValue: FilmType = {
  ownTitle: 'звездные войны',
  id: '1',
  categoryId: initialCategoryValue.id,
};

const DB: DataBase = {
  films: [initialFilmValue],
  categories: [initialCategoryValue],
};
export default DB;
