import {observable} from 'mobx';

import Task from "../models/Task";
import TaskStore from "./TaskStore";


export default class TasksStore {
  @observable tasks = [];
  
  constructor() {
    this.updateTasks();
  }
  
  updateTasks() {
    this.tasks = [];
    Task.all().forEach(
      (task) => {
        let taskStore = new TaskStore(this, task);
        this.tasks.push(taskStore);
      }
    );
  }
  
  createTask(task) {
    let newTaskStore = new TaskStore(this, task);
    newTaskStore.create();
    this.tasks.push(newTaskStore);
  }
}