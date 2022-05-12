import { useState } from 'react';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import { questions } from '../../data/questions';

import './styles.css';

const questionsShuffled = questions.sort(() => Math.random() - 0.5);

export function Game({ resetGame }) {
  const [answersAmount, setAnswersAmount] = useState(0);
  const [icons, setIcons] = useState([]);
  const [hasRedAnswer, setHasRedAnswer] = useState(false);

  function handleAnswersAmount() {
    setAnswersAmount(answersAmount + 1);
  }

  function addIcons(icon) {
    const iconsNewArray = [...icons, icon];
    setIcons(iconsNewArray);
  }

  function handleRedAnswer() {
    setHasRedAnswer(true);
  }

  return (
    <div className="game">
      <Header />

      <div className="questions">
        {questionsShuffled?.map((question, index) => (
          <Card
            key={index}
            index={index + 1}
            question={question.question}
            answer={question.answer}
            addIcons={addIcons}
            addAnswersAmount={handleAnswersAmount}
            handleRedAnswer={handleRedAnswer}
          />
        ))}
      </div>

      <Footer
        questionsAmount={questions.length}
        answersAmount={answersAmount}
        icons={icons}
        hasRedAnswer={hasRedAnswer}
        resetGame={resetGame}
      />
    </div>
  );
}
