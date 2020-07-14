import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';





function NewQuizForm(props) {
  const firestore = useFirestore();

  function addQuizForm(event) {
    event.preventDefault();
    props.onNewQuizCreation();

    console.log(event.target.q3.value);
    return firestore.collection('quizes').add(
      {
        q1: event.target.q1.value,
        a1: event.target.a1.value,
        q2: event.target.q2.value,
        a2: event.target.a2.value,
        q3: event.target.q3.value,
        a3: event.target.a3.value,
        q4: event.target.q4.value,
        a4: event.target.a4.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <form onSubmit={addQuizForm}>
        <input
          type='text'
          name='q1'
          placeholder='Question 1' />
        <input
          type='text'
          name='a1'
          placeholder='Answer 1' />
        <input
          type='text'
          name='q2'
          placeholder='Question 2' />
        <input
          type='text'
          name='a2'
          placeholder='Answer 2' />
        <input
          type='text'
          name='q3'
          placeholder='Question 3' />
        <input
          type='text'
          name='a3'
          placeholder='Answer 3' />
        <input
          type='text'
          name='q4'
          placeholder='Question 4' />
        <input
          type='text'
          name='a4'
          placeholder='Answer 4' />
        <button type='submit'>{props.buttonText}Submit</button>
      </form>
    </React.Fragment>
  );

}

NewQuizForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewQuizForm;