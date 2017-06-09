import cron from "node-cron";
import {observe} from 'mobx';


export default class Schedule {
  constructor(task) {
    this.task = task;
    this.initObservable();
    this.cron = null;
    this.createScheduledCron();
  }
  
  createScheduledCron() {
    this.cron = cron.schedule(
      this.task.cron,
      () => {
        new Notification(
          this.task.name,
          {
            title: this.task.name,
            body: this.task.note,
          }
        );
      },
      false
    );
  }
  
  cronActiveChanged(change) {
    if (this.task.cron_active) {
      this.cron.start();
    } else {
      this.cron.stop();
    }
  }
  
  cronChanged(change) {
    this.cron.destroy();
    this.createScheduledCron();
    if (this.isCronActive()) this.start();
  }
  
  initObservable() {
    observe(this.task, (change) => {
      switch (change.name) {
        case 'cron_active':
          this.cronActiveChanged(change);
          break;
        case 'cron':
          this.cronChanged(change);
      }
    });
  }
  
  isCronActive() {
    return this.task.cron_active;
  }
  
  start() {
    this.cron.start();
  }
  
  stop() {
    this.cron.stop();
  }
}