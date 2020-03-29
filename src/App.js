import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.feedbackOptions = ['Good', 'Neutral', 'Bad'];
  }

  addFeedbackPoints = key => {   
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  PositiveFeedbackPercentage = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    const goodpercent = (this.state.good * 100) / total;
    return Math.floor(goodpercent);
  };

  render() {
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={this.feedbackOptions}
          onLeaveFeedback={this.addFeedbackPoints}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.PositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
