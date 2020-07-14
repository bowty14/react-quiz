import React from 'react';
import Quiz from './Quiz';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';


function QuizList(props) {

  useFirestoreConnect([
    { collection: 'quizes' }
  ]);

  const quizes = useSelector(state => state.firestore.ordered.quizes);

  if (isLoaded(quizes)) {
    return (
      <React.Fragment>
        {quizes.map((quiz) => {
          return <Quiz
            whenQuizClicked={props.onQuizSelection}
            name={quiz.name}
            q1={quiz.q1}
            a1={quiz.a1}
            q2={quiz.q2}
            a2={quiz.a2}
            q3={quiz.q3}
            a3={quiz.a3}
            q4={quiz.q4}
            a4={quiz.a4}
            id={quiz.id}
            key={quiz.id} />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}


QuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default QuizList;