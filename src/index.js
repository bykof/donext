import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import cron from 'node-cron';

let root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);

render(<App />, document.getElementById('root'));

cron.schedule(
  '* * * * * *',
  function () {
    console.log('You will see this message every second');
  },
  true,
  function() {
    console.log('update');
  }
);
