import React, {Component} from 'react';
import TasksComponent from './TasksComponent';

import 'photonkit/dist/css/photon.css';
import 'simplemde/dist/simplemde.min.css';

import TasksStore from "../stores/TasksStore";
import Schedules from "../schedules/Schedules";

const tasksStore = new TasksStore;
const schedules = new Schedules();

schedules.initSchedules(tasksStore.tasks);

class App extends React.Component {
  render() {
    return (
      <div>
        <TasksComponent tasksStore={tasksStore} schedules={schedules}/>
      </div>
    );
  }
}

export default App;
