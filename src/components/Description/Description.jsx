import css from './Description.module.css';

export default function Description() {
  return (
    <header>
      <h1 className={css.h1}>Sip Happens Café</h1>
      <p className={css.descr_p}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </header>
  );
}
