import React from 'react';
import PropTypes from 'prop-types';

function QuizDetail(props) {
  const { quiz, onClickingDelete } = props;
  console.log(quiz.id);
  let result1, result2, result3, result4 = "";

  function checkAnswers(event) {
    event.preventDefault();
    console.log(quiz);
    result1 = (quiz.a1 === event.target.a1.value) ? "You're correct." : "You're Incorrect";
    console.log(result1);
    result2 = (quiz.a2 === event.target.a2.value) ? "You're correct." : "You're Incorrect";
    result3 = (quiz.a3 === event.target.a3.value) ? "You're correct." : "You're Incorrect";
    result4 = (quiz.a4 === event.target.a4.value) ? "You're correct." : "You're Incorrect";
    document.getElementById("r1").innerText = result1;
    document.getElementById("r2").innerText = result2;
    document.getElementById("r3").innerText = result3;
    document.getElementById("r4").innerText = result4;
  }


  return (
    <React.Fragment>
      <h1>Quiz Detail</h1>
      <div className='quizDetail'>
        <form onSubmit={checkAnswers}> 
          <p className='question1' >{quiz.q1}</p>
          <input type='text' name='a1' placeholder='Enter answer here' className='answer'></input>
          <p id='r1'></p>
          <p className='question2' >{quiz.q2}</p>
          <input type='text' name='a2' placeholder='Enter answer here' className='answer'></input>
          <p id='r2'></p>
          <p className='question3' >{quiz.q3}</p>
          <input type='text' name='a3' placeholder='Enter answer here' className='answer'></input>
          <p id='r3'></p>
          <p className='question4' >{quiz.q4}</p>
          <input type='text' name='a4' placeholder='Enter answer here' className='answer'></input>
          <p id='r4'></p>
          <button className='submitButton' type='submit'>Submit</button>
        </form>
      </div>

      <button className='detailButton' id='detailEdit' onClick={props.onClickingEdit}>Update Quiz</button>
      <button className='detailButton' id='detailDelete' onClick={() => onClickingDelete(quiz.id)}>Delete Quiz</button>
    </React.Fragment>
  );

}

QuizDetail.propTypes = {
  question1: PropTypes.string,
  question2: PropTypes.string,
  question3: PropTypes.string,
  question4: PropTypes.string,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default QuizDetail;