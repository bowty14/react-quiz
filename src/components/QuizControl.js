import React from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import Quiz from './Quiz';


class QuizControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedQuiz: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedQuiz != null) {
      this.setState({
        selectedQuiz: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      dispatch(a.toggleFormData());
    }
  }

  handleAddingNewQuiz = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleForm());
  }

  handleChangingSelectedQuiz = (id) => {
    this.props.firestore.get({ collection: 'quizes', doc: id }).then((quiz) => {
      const forestoreQuiz = {
        name: quiz.get('name'),
        q1: quiz.get('q1'),
        a1: quiz.get('a1'),
        q2: quiz.get('q2'),
        a2: quiz.get('a2'),
        q3: quiz.get('q3'),
        a3: quiz.get('a3'),
        q4: quiz.get('q4'),
        a4: quiz.get('a4'),
      }
      this.setState({ selectedQuiz: firestoreQuiz });
    });
  }

  handleDeletingQuiz = (id) => {
    this.props.firestore.delete({ collection: 'quizes', doc: id });
    this.setState({ selectedQuiz: null });
  }

  handleEditClick = () => {
    console.log('hanleEditClick reached');
    this.setState({ editing: true });
  }

  handleEditingTicketInList = () => {

  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      // Edit Form Goes Here
      buttonText = "Return to Quiz List";
    } else if (this.state.selectedQuiz !== null) {
      currentlyVisibleState = <QuizDetail
        quiz={this.state.selectedQuiz} />
      buttonText = "Return to Quiz List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewQuizForm
        onNewQuizCreation={this.handleAddingNewQuiz} />
      buttonText = "Return to Quiz List";
    } else {
      currentlyVisibleState = <QuizList
        onQuizSelection={this.handleChangingSelectedQuiz} />
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

QuizControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
  }
}

QuizControl = connect(mapStateToProps)(QuizControl);
export default withFirestore(QuizControl);