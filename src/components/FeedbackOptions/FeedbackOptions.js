import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options,onLeaveFeedback}) => {
    console.log(onLeaveFeedback);
       return (
        <div>
        <Button callbackfunc={onLeaveFeedback} text="Good" />
        <Button callbackfunc={onLeaveFeedback} text="Neutral" />
        <Button callbackfunc={onLeaveFeedback} text="Bad" />
        </div>
    );
} 

export default FeedbackOptions;