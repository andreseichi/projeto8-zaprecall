import { Message } from '../Message';
import './styles.css';

export function Footer({
  questionsAmount,
  answersAmount,
  icons,
  hasRedAnswer,
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
    </footer>
  );
}
