import { Message } from '../Message';

import './styles.css';

export function Footer({
  questionsAmount,
  answersAmount,
  icons,
  hasRedAnswer,
  resetGame,
}) {
  return (
    <footer className="footer">
      {questionsAmount === answersAmount ? (
        <Message hasRedAnswer={hasRedAnswer} />
      ) : null}

      <div className="completed">
        <span>
          {answersAmount}/{questionsAmount} concluídos
        </span>
        <div className="icons">
          {icons?.map((icon, index) => (
            <img src={icon} alt="" className="icon" key={index} />
          ))}
        </div>
      </div>

      {questionsAmount === answersAmount ? (
        <button className="restart-btn" onClick={resetGame}>
          Reiniciar Recall
        </button>
      ) : null}
    </footer>
  );
}
