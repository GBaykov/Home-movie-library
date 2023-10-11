import DB from '../db';
export const getAll = async () => {
  // TO DO: if(!db) throw Err ('Error: no category', 404)
  return DB.categories;
};
