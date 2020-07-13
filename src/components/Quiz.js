import React from 'react';
import PropTypes from 'prop-types';

function Quiz(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenQuizClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.q1}</h3>
        <h3>{props.q2}</h3>
        <h3>{props.q3}</h3>
        <h3>{props.q4}</h3>
      </div>
    </React.Fragment>
  );
}


Quiz.PropTypes = {
  name: PropTypes.string,
  q1: PropTypes.string,
  q2: PropTypes.string,
  q3: PropTypes.string,
  q4: PropTypes.string,
  id: PropTypes.string,
  whenQuizClicked: PropTypes.func
};

export default Quiz;