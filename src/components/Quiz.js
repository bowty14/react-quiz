import React from 'react';
import PropTypes from 'prop-types';

function Quiz(props) {
  return (
    <React.Fragment>
      <div className='quizOnHome'>
        <div onClick={() => props.whenQuizClicked(props.id)}>
          <h3>{props.name}</h3>
          <h3>Question 1( {props.q1}</h3>
          <h3>Question 2( {props.q2}</h3>
          <h3>Question 3( {props.q3}</h3>
          <h3>Question 4( {props.q4}</h3>
        </div>
      </div>
    </React.Fragment>
  );
}


Quiz.propTypes = {
  name: PropTypes.string,
  q1: PropTypes.string,
  q2: PropTypes.string,
  q3: PropTypes.string,
  q4: PropTypes.string,
  id: PropTypes.string,
  whenQuizClicked: PropTypes.func
};

export default Quiz;