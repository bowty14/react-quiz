import React from 'react';
import Header from './Header';
import QuizControl from './QuizControl';

function App() {
  return (
    <React.Fragment>
      <div className='header'> <Header /> </div>
      <div className='container'>
        <QuizControl />
      </div>
    </React.Fragment>
  );
}

export default App;
