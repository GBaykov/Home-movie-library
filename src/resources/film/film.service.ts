import DB from '../../db';
import { RequestError } from '../../errorHandler';
import { FilmType, OwnCategory } from '../../types';
import { Film } from './film.model';

export const getAll = async () => {
  if (!DB.films) throw new RequestError('Error in getAll films', 404);
  return DB.films;
};

export const getFilm = async (id: string) => {
  const film = await DB.films.find((item) => item.id === id);
  if (!film) throw new RequestError('Error: can not get film', 404);
  return film;
};

export const addFilm = async (data: FilmType) => {
  const film = new Film(data);
  console.log(film);
  if (!film || !film.ownTitle)
    throw new RequestError('Error: can not create film', 404);
  DB.films.push(film);
  return film;
};

export const updateFilm = async (id: string, data: FilmType) => {
  const film = await DB.films.find((item, index) => item.id === id);
  if (!film) throw new RequestError('Error: can not update Film', 404);
  const newFilm = new Film(data);
  newFilm.id = id;
  const index = await DB.films.findIndex((item) => item.id === id);
  DB.films.splice(index, 1, newFilm);

  if (film && newFilm && newFilm.ownTitle && newFilm.ownRate && index !== -1) {
    return newFilm;
  }
  throw new RequestError('Error: error while updeting category', 404);
};

export const deleteFilm = async (id: string) => {
  const index = await DB.films.findIndex((item) => item.id === id);
  if (!index)
    throw new RequestError(
      'Error in deleteCategory: no film with such id ',
      404,
    );
  DB.films.splice(index, 1);

  if (index !== -1) {
    return 200;
  }

  throw new RequestError('Error: error while deleting category', 404);
};
