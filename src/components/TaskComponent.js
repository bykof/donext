import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'react-simplemde-editor';


export default class TaskComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      edit_name: false,
      edit_note: false
    };
    
    this.toggleEditName = this.toggleEditName.bind(this);
    this.toggleEditNote = this.toggleEditNote.bind(this);
  }
  
  changeName(event) {
    this.props.task.name = event.target.value;
    this.props.task.save();
  }
  
  changeNote(value) {
    this.props.task.note = value;
    this.props.task.save();
  }
  
  toggleEditName() {
    this.setState({edit_name: !this.state.edit_name});
  }
  
  toggleEditNote() {
    this.setState({edit_note: !this.state.edit_note});
  }
  
  render() {
    
    const {task} = this.props;
    let content = (
      <div className="padded-more">
        <p>No task selected!</p>
      </div>
    );
    
    if (task) {
      let name = (
        <h1 onClick={this.toggleEditName}>
          {task.name}
        </h1>
      );
      
      let note = (
        <div onClick={this.toggleEditNote}>
          <ReactMarkdown source={task.note ? task.note : 'Write something...'}/>
        </div>
      );
      
      if (this.state.edit_name) {
        name = (
          <input
            type="text"
            name="name"
            className="form-control"
            value={task.name}
            onChange={this.changeName.bind(this)}
            onKeyPress={
              (event) => {
                if (event.key === 'Enter') {
                  this.toggleEditName();
                }
              }
            }
          />
        );
      }
      
      if (this.state.edit_note) {
        note = (
          <SimpleMDE
            onChange={this.changeNote.bind(this)}
            value={this.props.task.note ? this.props.task.note : ''}
            options={{
              autofocus: true,
            }}
          />
        );
      }
      
      
      content = (
        <div className="padded-more">
          {name}
          <hr />
          {note}
          <hr />
        </div>
      );
    }
    
    return content;
  }
}
