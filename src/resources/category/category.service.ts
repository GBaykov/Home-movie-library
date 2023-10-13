import DB from '../../db';
import { RequestError } from '../../errorHandler';
import { OwnCategory } from '../../types';
import { Category } from './category.model';

export const getAll = async () => {
  if (!DB.categories) throw new RequestError('Error in getAll categories', 404);
  return DB.categories;
};

export const getCategory = async (categoryId: string) => {
  const category = await DB.categories.find(
    (item) => item.categoryId === categoryId,
  );
  if (!category) throw new RequestError('Error: can not get category', 404);
  return category;
};

export const addCategory = async (data: OwnCategory) => {
  if (!data.title) {
    throw new RequestError('Error: Category Data mast include  title', 404);
  }
  const category = new Category(data);
  if (!category) throw new RequestError('Error: can not create category', 404);
  DB.categories.push(category);
  return category;
};

export const updateCategory = async (categoryId: string, data: OwnCategory) => {
  console.log(data);
  const category = await DB.categories.find(
    (item, index) => item.categoryId === categoryId,
  );
  if (!category) throw new RequestError('Error: can not update category', 404);
  const newCategory = new Category(data);
  newCategory.categoryId = categoryId;
  const index = await DB.categories.findIndex(
    (item) => item.categoryId === categoryId,
  );
  DB.categories.splice(index, 1, newCategory);
  console.log(newCategory);
  if (category && newCategory && index !== -1) {
    return newCategory;
  }
  throw new RequestError(' error while updeting category', 404);
};

export const deleteCategory = async (categoryId: string) => {
  const index = await DB.categories.findIndex(
    (item) => item.categoryId === categoryId,
  );
  if (!index)
    throw new RequestError(
      'Error in deleteCategory: no category with such id ',
      404,
    );
  DB.categories.splice(index, 1);

  if (index !== -1) {
    return 200;
  }
  throw new RequestError('Error: error while deleting category', 404);
};
