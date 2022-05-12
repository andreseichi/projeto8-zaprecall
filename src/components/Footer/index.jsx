import './styles.css';

export function Footer({ questionsAmount, answersAmount, icons }) {
  return (
    <footer className="footer">
      <div className="message">
        <span className="first-message">Parabéns!</span>
        <span className="second-message">
          Você não esqueceu de nenhum flashcard!
        </span>
      </div>

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
