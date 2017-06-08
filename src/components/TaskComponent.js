import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import CronEditor from "./CronEditor";
import classNames from 'classnames';

import '../assets/css/Task.css';


export default class TaskComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      edit_name: false,
      edit_note: false
    };
    
    this.taskContent = this.taskContent.bind(this);
  }
  
  changeName(event) {
    this.props.task.name = event.target.value;
    this.props.task.save();
  }
  
  changeNote(value) {
    this.props.task.note = value;
    this.props.task.save();
  }
  
  changeCron(value) {
    this.props.task.cron = value;
    this.props.task.save();
  }
  
  toggleCronActive(event) {
    this.props.task.cron_active = !this.props.task.cron_active;
    this.props.task.save();
  }
  
  taskContent() {
    return (
      <div className="padded-more">
        <input
          type="text"
          name="name"
          className="form-control"
          value={this.props.task.name}
          onChange={this.changeName.bind(this)}
        />
        <hr />
        <SimpleMDE
          onChange={this.changeNote.bind(this)}
          value={this.props.task.note ? this.props.task.note : ''}
          options={{
            autofocus: true,
            spellChecker: false,
          }}
        />
        <hr />
        <
          CronEditor
          onChange={
            this.changeCron.bind(this)
          }
        />
        <br />
        <div className="row">
          <div className="col-xs-12">
            <button
              type="button"
              className={
                classNames(
                  'btn pull-right',
                  {
                    'btn-primary': !this.props.task.cron_active,
                    'btn-default': this.props.task.cron_active,
                  }
                )
              }
              onClick={this.toggleCronActive.bind(this)}
            >
              {
                this.props.task.cron_active ? 'Turn off?' : 'Remind me!'
              }
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  render() {
    
    const {task} = this.props;
    let content = (
      <div className="padded-more">
        <p>No task selected!</p>
      </div>
    );
    
    
    if (task) {
      content = this.taskContent();
    }
    
    return content;
  }
}
