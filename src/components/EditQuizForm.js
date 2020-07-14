import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditQuizForm(props) {
  const firestore = useFirestore();
  const { quiz } = props;
  let quizId = quiz.id;
  function handleEditQuizFormSubmission(event) {
    event.preventDefault();
    props.onEditQuiz();
    const propertiesToUpdate = {
      q1: event.target.q1.value,
      a1: event.target.a1.value,
      q2: event.target.q2.value,
      a2: event.target.a2.value,
      q3: event.target.q3.value,
      a3: event.target.a3.value,
      q4: event.target.q4.value,
      a4: event.target.a4.value
    }
    return firestore.update({ collection: 'quizes', doc: quizId }, propertiesToUpdate);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleEditQuizFormSubmission} className='form-control'>
        <input
          type='text'
          name='q1'
          value={quiz.q1}
          placeholder='Question 1'
        />
        <input
          type='text'
          name='a1'
          value={quiz.a1}
          placeholder='Answer 1' />
        <input
          type='text'
          name='q2'
          value={quiz.q2}
          placeholder='Question 2' />
        <input
          type='text'
          name='a2'
          value={quiz.a2}
          placeholder='Answer 2' />
        <input
          type='text'
          name='q3'
          value={quiz.q3}
          placeholder='Question 3' />
        <input
          type='text'
          name='a3'
          value={quiz.a3}
          placeholder='Answer 3' />
        <input
          type='text'
          name='q4'
          value={quiz.q4}
          placeholder='Question 4' />
        <input
          type='text'
          name='a4'
          value={quiz.a4}
          placeholder='Answer 4' />
        <button type='submit'>{props.buttonText}Submit</button>
      </form>
    </React.Fragment>
  );
}

EditQuizForm.propTypes = {
  onEditQuiz: PropTypes.func
};

export default EditQuizForm;