import { useState } from 'react';

import Icon from '../../assets/images/play.svg';

import green from '../../assets/images/green.svg';
import orange from '../../assets/images/orange.svg';
import red from '../../assets/images/red.svg';

import { Question } from '../Question';

import './styles.css';

export function Card({
  question,
  answer,
  index,
  addIcons,
  addAnswersAmount,
  handleRedAnswer,
}) {
  const [isQuestionShowing, setIsQuestionShowing] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [color, setColor] = useState('');
  const [icon, setIcon] = useState(Icon);

  function toggleQuestionShowing(colorProp) {
    setIsQuestionShowing(false);
    setIsAnswered(true);
    setColor(colorProp);
    addAnswersAmount();

    if (colorProp === 'red') {
      setIcon(red);
      addIcons(red);
      handleRedAnswer();
    }
    if (colorProp === 'orange') {
      setIcon(orange);
      addIcons(orange);
    }
    if (colorProp === 'green') {
      setIcon(green);
      addIcons(green);
    }
  }

  function handleShowQuestion() {
    if (isAnswered) return;
    setIsQuestionShowing(true);
  }

  return (
    <>
      {isQuestionShowing ? (
        <Question
          question={question}
          answer={answer}
          toggleQuestionShowing={toggleQuestionShowing}
        />
      ) : (
        <div className="question" onClick={handleShowQuestion}>
          <h3 className={color}>Pergunta {index}</h3>

          <img src={icon} alt="" />
        </div>
      )}
    </>
  );
}
