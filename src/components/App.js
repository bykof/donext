import React, {Component} from 'react';
import TasksComponent from './TasksComponent';

import 'photonkit/dist/css/photon.css';
import 'simplemde/dist/simplemde.min.css';

import TasksStore from "../stores/TasksStore";

const tasksStore = new TasksStore;

class App extends React.Component {
  render() {
    return (
      <div>
        <TasksComponent tasksStore={tasksStore} />
      </div>
    );
  }
}

export default App;
