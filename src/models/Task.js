import BaseModel from "./BaseModel";


export default class Task extends BaseModel {
  static get TABLE_NAME() {
    return 'tasks';
  };
  
  constructor() {
    super();
  }
}