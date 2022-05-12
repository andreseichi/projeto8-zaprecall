import './styles.css';

export function Button({ children, color, onClick }) {
  return (
    <button
      type="button"
      className={`${color}-btn answer-btn`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
