import React from 'react';
import NewQuizForm from './NewQuizForm';
import EditQuizForm from './EditQuizForm';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';



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
      dispatch(a.toggleForm());
    }
  }

  handleAddingNewQuiz = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleForm());
  }

  handleChangingSelectedQuiz = (id) => {
    this.props.firestore.get({ collection: 'quizes', doc: id }).then((quiz) => {
      const firestoreQuiz = {
        name: quiz.get('name'),
        q1: quiz.get('q1'),
        a1: quiz.get('a1'),
        q2: quiz.get('q2'),
        a2: quiz.get('a2'),
        q3: quiz.get('q3'),
        a3: quiz.get('a3'),
        q4: quiz.get('q4'),
        a4: quiz.get('a4'),
        id: quiz.id
      }
      this.setState({ selectedQuiz: firestoreQuiz });
    });
  }

  handleDeletingQuiz = (id) => {
    console.log(id);
    this.props.firestore.delete({ collection: 'quizes', doc: id });
    this.setState({ selectedQuiz: null });
  }

  handleEditClick = () => {
    console.log('hanleEditClick reached');
    this.setState({ editing: true });
  }

  handleEditingQuizInList = () => {
    this.setState({
      editing: false,
      selectedQuiz: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditQuizForm quiz={this.state.selectedQuiz} onEditQuiz={this.handleEditingQuizInList} />
      buttonText = "Return to Quiz List";
    } else if (this.state.selectedQuiz !== null) {
      currentlyVisibleState = <QuizDetail
        onClickingEdit={this.handleEditClick}
        onClickingDelete={this.handleDeletingQuiz}
        quiz={this.state.selectedQuiz} />
      buttonText = "Return to Quiz List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewQuizForm
        onNewQuizCreation={this.handleAddingNewQuiz} />
      buttonText = "Return to Quiz List";
    } else {
      currentlyVisibleState = <QuizList
        onQuizSelection={this.handleChangingSelectedQuiz} />
      buttonText = "Add a quiz"
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
// export default QuizControl;

// a1 = input on newquizform
// answer1 = input on quizdetail
// answer1 should === a1 and return a success message
// if ({ a1 } === { answer1 }) {
//   return (
//     <React.Fragment>
//       <h3>That is correct</h3>
//       {a1 === answer1 && "message to show"}
//     </React.Fragment>
//   )
// }else
//   return false


