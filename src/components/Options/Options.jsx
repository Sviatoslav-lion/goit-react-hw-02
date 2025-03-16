import css from './Options.module.css';
// export default function Options({ onGood, onNeutral, onBad, onReset }) {
//   return (
//     <div className="card">
//       <button onClick={onGood}>Good</button>
//       <button onClick={onNeutral}>Neutral</button>
//       <button onClick={onBad}>Bad</button>
//       <button onClick={onReset}>Reset</button>
//     </div>
//   );
// }

export default function Options({ onFeedbackClick, onReset, statusResBut }) {
  return (
    <div className={css.feedback_buttons}>
      <button className={css.user_button} onClick={() => onFeedbackClick('good')}>
        Good
      </button>
      <button className={css.user_button} onClick={() => onFeedbackClick('neutral')}>
        Neutral
      </button>
      <button className={css.user_button} onClick={() => onFeedbackClick('bad')}>
        Bad
      </button>
      {statusResBut && (
        <button className={css.user_button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
