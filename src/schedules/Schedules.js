import Schedule from "./Schedule";


export default class Schedules {
  
  constructor() {
    this.schedules = [];
  }
  
  initSchedules(tasks) {
    tasks.forEach(
      (task) => {
        let schedule = new Schedule(task);
        if (schedule.isCronActive()) {
          schedule.start();
        }
        this.schedules.push(schedule);
      }
    );
  }
}