import React, { Component } from 'react';
import Button from './components/Button/Button';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  addGood = () => {
    this.setState(prevState => {
      console.log(prevState);
      return { good: prevState.good + 1 };
    });
  };

  addNeutral = () => {
    this.setState(prevState => {
      console.log(prevState);
      return { neutral: prevState.neutral + 1 };
    });
  };

  addBad = () => {
    this.setState(prevState => {
      console.log(prevState);
      return { bad: prevState.bad + 1 };
    });
  };

  addFeedbackPoints = key => {
    this.setState(prevState => {
      console.log(prevState);
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    console.log(values);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  PositiveFeedbackPercentage = () => {
    const values = Object.values(this.state);
    console.log(values);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    const goodpercent = (this.state.good * 100) / total;
    return goodpercent;
  };

  render() {
    return (
      <div>
        {/* <Button callbackfunc={this.addFeedbackPoints} text="Good" />
        <Button callbackfunc={this.addFeedbackPoints} text="Neutral" />
        <Button callbackfunc={this.addFeedbackPoints} text="Bad" /> */}
         <FeedbackOptions onLeaveFeedback = {this.addFeedbackPoints}/>
        <div>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.PositiveFeedbackPercentage()}
          />
        </div>
      </div>
    );
  }
}

export default App;
