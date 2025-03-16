import css from './StatusBar.module.css';

export default function StatusBar({ name, argument, total }) {
  const argumentPer = Math.round((argument / total) * 100);
  return (
    <div className={css.element_container}>
      <div className={css.barLable}>
        <p>{name}:</p>
        <p clasName={css.feedbackCount}>{argument}</p>
      </div>
      <div className={css.status_bar_container}>
        <div className={css.status_bar_progress} style={{ width: `${total == 0 ? 0 : argumentPer}%` }}>
          <p className={css.barVal}>{total == 0 ? 0 : argumentPer}%</p>
        </div>
      </div>
    </div>
  );
}
