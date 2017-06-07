import low from 'lowdb';
import lodash from 'lodash-id';

const database = low('db.json');

/**
 * Use IDs when saving
 */
database._.mixin(lodash);

/**
 * Set defaults in the databse
 * */
database.defaults({tasks: []}).write();

export default database;
