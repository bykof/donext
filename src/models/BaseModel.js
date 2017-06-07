import database from '../db';


export default class BaseModel {
  static get TABLE_NAME() {
    throw 'NotImplemented';
  }
  
  static get table() {
    return database.get(this.TABLE_NAME);
  }
  
  static all() {
    return this.table.value();
  }
  
  static get(id) {
    return this.table.getById(id).value();
  }
  
  static create(data) {
    return this.table.insert(data).write();
  }
  
  static update(data) {
    return this.table.updateById(data.id, data).write();
  }
  
  static delete(id) {
    return this.table.removeById(id).write();
  }
}