import React, { Fragment, PureComponent } from 'react';
import { DatePicker } from 'material-ui-pickers';

export default class BasicDatePicker extends PureComponent {

  state = {
    selectedDate: '2018-01-01T00:00:00.000Z',
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <DatePicker
            format="DD MMM YYYY"
            rightArrowIcon='keyboard_arrow_right'
            showTodayButton
            keyboard
            maxDateMessage="Date must be less than today"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
          />
        </div>
      </Fragment>
    );
  }
}