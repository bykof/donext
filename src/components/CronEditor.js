import React, {Component} from 'react';
import cron from 'node-cron';


class CronEditor extends React.Component {
  
  EVERY = '*';
  
  constructor(props) {
    super(props);
    this.state = {
      second: this.EVERY,
      minute: this.EVERY,
      hour: this.EVERY,
      day_of_month: this.EVERY,
      month: this.EVERY,
      day_of_week: this.EVERY,
    };
    
    this.toString = this.toString.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeStateByName = this.changeStateByName.bind(this);
    this.validateForContent = this.validateForContent.bind(this);
  }
  
  validateForContent(event) {
    if (event.target.value === '') {
      this.state[event.target.name] = this.EVERY;
      this.setState(this.state, this.onChange);
    }
  }
  
  changeStateByName(event) {
    if (event.target.value === '') {
      this.state[event.target.name] = event.target.value;
      this.setState(this.state);
    }
    
    let before_value = this.state[event.target.name];
    this.state[event.target.name] = event.target.value;
    this.setState(this.state, this.onChange);
    
    if (!cron.validate(this.toString())) {
      this.state[event.target.name] = before_value;
      this.setState(this.state, this.onChange);
    }
  }
  
  toString() {
    return ['second', 'minute', 'hour', 'day_of_month', 'month', 'day_of_week'].map(
      (key) => {
        return this.state[key];
      }
    ).join(' ');
  }
  
  onChange() {
    console.log('onchange: ', this.toString());
    this.props.onChange(this.toString());
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <table className="table-reponsive">
            <tbody>
            <tr>
              <td>Hour</td>
              <td>Minute</td>
              <td>Second</td>
              <td>Day of month</td>
              <td>Month</td>
              <td>Day of week</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  value={this.state.hour}
                  className="form-control"
                  name="hour"
                  onChange={this.changeStateByName}
                  onBlur={this.validateForContent}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.minute}
                  className="form-control"
                  name="minute"
                  onChange={this.changeStateByName}
                  onBlur={this.validateForContent}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.second}
                  className="form-control"
                  name="second"
                  onChange={this.changeStateByName}
                  onBlur={this.validateForContent}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.day_of_month}
                  className="form-control"
                  name="day_of_month"
                  onChange={this.changeStateByName}
                  onBlur={this.validateForContent}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.month}
                  className="form-control"
                  name="month"
                  onChange={this.changeStateByName}
                  onBlur={this.validateForContent}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.day_of_week}
                  className="form-control"
                  name="day_of_week"
                  onChange={this.changeStateByName}
                  onBlur={this.validateForContent}
                />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CronEditor;
