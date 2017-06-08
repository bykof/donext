import React, {Component} from 'react';
import TaskComponent from "./TaskComponent";
import classNames from 'classnames';

import {observer} from 'mobx-react';

import '../assets/css/Tasks.css';


@observer
export default class TasksComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      new_task: '',
      selected_task: null,
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateNewTask = this.updateNewTask.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.tasksStore.createTask({name: this.state.new_task});
    this.setState({new_task: ''});
  }
  
  selectTask(task) {
    this.setState({selected_task: task});
  }
  
  updateNewTask(event) {
    this.setState({new_task: event.target.value});
  }
  
  deleteTask(task) {
    task.delete();
  }
  
  render() {
    const {tasksStore} = this.props;
    
    const tasks = tasksStore.tasks.map(
      (task) => {
        return (
          <li
            key={task.id}
            className={
              classNames('list-group-item', {'selected-task': this.state.selected_task === task})
            }
          >
            <div
              className="row"
              onClick={
                () => {
                  this.selectTask(task)
                }
              }
            >
              <strong>
                {task.name}
              </strong>
              <a
                href="#"
                className="pull-right"
                id="delete-task"
                onClick={
                  () => {
                    this.deleteTask(task)
                  }
                }
              >
                <span className="icon icon-check"/>
              </a>
            </div>
          </li>
        );
      }
    );
    
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane pane-sm sidebar">
              <nav className="nav-group">
                <ul className="list-group">
                  <li className="list-group-header">
                    <form onSubmit={this.handleSubmit}>
                      <p>What's your task?</p>
                      <input
                        className="form-control new-task-input"
                        type="text"
                        name='new_task'
                        value={this.state.new_task}
                        onChange={this.updateNewTask}
                      />
                      <button
                        type="submit"
                        className="btn btn-default pull-right"
                        onClick={this.handleSubmit}
                      >
                        Create
                      </button>
                    </form>
                  </li>
                  {tasks}
                </ul>
              </nav>
            </div>
            <div className="pane">
              <TaskComponent task={this.state.selected_task}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
