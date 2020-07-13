import React from 'react';
import PropTypes from 'prop-types';

function QuizDetail(props) {
  const { quiz } = props;

  <React.Fragment>
    <h1>Quiz Detail</h1>
    <form onSubmit={props.quizSubmissionHandler}>
      <p>{quiz.question1}</p>
      <input type='text' name='answer1'></input>
      <p>{quiz.question2}</p>
      <input type='text' name='answer2'></input>
      <p>{quiz.question3}</p>
      <input type='text' name='answer3'></input>
      <p>{quiz.question4}</p>
      <input type='text' name='answer4'></input>
      <button type='submit'>Submit</button>
    </form>
  </React.Fragment>
}

QuizDetail.propTypes = {
  quizSubmissionHandler: PropTypes.func,
  question1: PropTypes.string,
  question2: PropTypes.string,
  question3: PropTypes.string,
  question4: PropTypes.string
};

export default QuizDetail;