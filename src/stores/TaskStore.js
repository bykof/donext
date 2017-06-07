import {observable} from 'mobx';

import Task from "../models/Task";


export default class TaskStore {
  id;
  @observable name;
  @observable note;
  
  constructor(tasksStore, task) {
    this.tasksStore = tasksStore;
    this.id = task.id;
    this.name = task.name;
    this.note = task.note;
  }
  
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      note: this.note
    }
  }
  
  create() {
    let new_task = Task.create(this.toJSON());
    this.id = new_task.id;
  }
  
  update() {
    Task.update(this.toJSON());
  }
  
  save() {
    if (this.id) {
      this.update();
    } else {
      this.create();
    }
    this.tasksStore.updateTasks();
  }
  
  delete() {
    Task.delete(this.id);
    this.tasksStore.updateTasks();
  }
}