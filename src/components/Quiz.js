import React, { useState } from 'react'
import { QuizData } from '../Data/Quizdata'

function Quiz() {
  const [curentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0);
  const [selectOption, setSelectOption] = useState(0)
  
  
  const changeQuestion = ()=>{
    if(curentQuestion< QuizData.length-1){
      setCurrentQuestion(curentQuestion+1);
    }else{

    }
    updateScore();
    
  }
  const updateScore =()=>{
    if(selectOption===QuizData[curentQuestion].answer){
      setScore(score+1)
    }
  }
  
  return (
    <>
      <p className='heading-txt'>Quiz</p>
      <div className='container'>
        <div className='question'>
          <span id='question-number'>{curentQuestion + 1}.</span>
          <span id='question-txt'>{QuizData[curentQuestion].question}</span>
        </div>
        <div className='option-container'>
          {QuizData[curentQuestion].options.map((option, i) => {
            return (
              <button 
              
              // className='option-btn'
              className={`option-btn ${
                clickedOption == i+1?"checked":null
              }`}
              key={i} onClick={()=> setSelectOption(i+1)} >
                
                
                {option} </button>
            )

          })}
        </div>
        <input type='button' value="Next" id='next-button' onClick={changeQuestion} />
      </div>
    </>
  )
}

export default Quiz