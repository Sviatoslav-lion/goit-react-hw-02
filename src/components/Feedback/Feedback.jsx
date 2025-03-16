import css from './Feedback.module.css';
import css2 from '../StatusBar/StatusBar.module.css';
import StatusBar from '../StatusBar/StatusBar.jsx';

export default function Feedback({ feedback, total }) {
  const { good, neutral, bad } = feedback;
  return (
    <div className={css.statistic_container}>
      <h2 className="visually-hidden">Статистика</h2>
      <StatusBar name="Good" argument={good} total={total} />
      <StatusBar name="Neutral" argument={neutral} total={total} />
      <StatusBar name="Bad" argument={bad} total={total} />
      <div className={css2.barLable}>
        <p className={css.statistic_text}>Total:</p>
        <p className={css2.feedbackCount}>{total}</p>
      </div>
      <div className={css2.barLable}>
        <p className={css.statistic_text}>Positive:</p>
        <p className={css2.feedbackCount}>{Math.round((good / total) * 100)}%</p>
      </div>
    </div>
  );
}
