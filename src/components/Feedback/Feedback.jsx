import React from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Section } from './Section';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // addFeedback = (option) => {
  //     console.log(this.state[option]);
  //     this.setState( {[option]:this.state[option]+1});
  // }

  addFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    //    console.log(this.state[option]);
  };

  countTotalFeedback = () => {
    const stateArr = Object.values(this.state);
    // console.log(stateArr);
    const totalFeedback = stateArr.reduce((total, state) => {
      return total + state;
    }, 0);
    // console.log(totalFeedback);
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good === 0
      ? 0
      : Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const stateKeys = Object.keys(this.state);
    // const stateValues = Object.values(this.state);
    const { good, bad, neutral } = this.state;
    // const render = stateValues.some(value => value > 0);

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={this.addFeedback}
          />
          {/* !render */}
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
