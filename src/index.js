require('./react-datepicker.css')
require('./styles.css')

import React from 'react';
import { render } from 'react-dom';
import DatePicker from './react-datepicker'
import { Portal } from 'react-overlays'

const CalendarContainer = ({children}) => {
  const el = document.getElementById('calendar-portal')

  return (
    <Portal container={el}>
      {children}
    </Portal>
  )
}

const App = () => (
  <div className="scrollContainer">
    <label>With Container</label>
    <DatePicker popperContainer={CalendarContainer} />

    <label>Without Container</label>
    <DatePicker />

    <div className="empty" />
  </div>
);

render(<App />, document.getElementById('root'));
