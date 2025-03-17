import { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Description from '../components/Description/Description.jsx';
import Options from '../components/Options/Options.jsx';
import Feedback from '../components/Feedback/Feedback.jsx';
import Notification from '../components/Notification/Notification.jsx'

function App() {
  // Створюємо об'єкт для збереження станів
  const [feedback, setFeedback] = useState(
    // оголошуємо функцію без аргумента для перевірки локального сховища та запису данних минулого статусу, якщо такі дані є
    () => {
      // якщо в локальному сховищі за ключем feedback не рядок, то буде помилка, тож ловимо її
      try {
        // зчитує дані з локального сховища за ключем feedback, якщо дані є, повертаються у вигляді рядка
        const saveFeedback = localStorage.getItem('feedback');
        return saveFeedback
          ? // якщо є дані, конвертуємо цей рядок у JavaScript-об'єкт
            JSON.parse(saveFeedback)
          : // якщо данних немає, тоді присвоємо нулі
            // далі розкриваємо об'єкт feddback на складові
            // функція setFeedback оновлює значення в об'єкті feedback при зміну стану хуку
            {
              good: 0,
              neutral: 0,
              bad: 0,
            };
      } catch (error) {
        // якщо помилка виводимо в консоль повідомлення
        console.error('Error parsing feedback from localStorage:', error);
        // повертаємо початкові значення
        return { good: 0, neutral: 0, bad: 0 };
      }
    },
  );

  // розраховуємо загальну кількість фідбеків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const PerPositiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  // Оновлюємо змінені значення об'єкту feedback

  const updateFeedback = feedbackType => {
    // Тут використовуй сеттер, щоб оновити стан
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  //Функція скидання кліків
  const clickReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Ефект для збереження даних у локальне сховище при зміні стану
  useEffect(() => {
    // записуємо до локального сховища рядок з ключем feedback
    localStorage.setItem(
      'feedback', // ключ
      JSON.stringify(feedback),
    ); // перетворюємо ою'єкт в рядок
  }, [feedback]); //встановлюємо залежність еффекту, викликається кожного разу, коли змінюється feedback

  return (
    <div>
      <Description />
      <Options onFeedbackClick={updateFeedback} onReset={clickReset} statusResBut={totalFeedback > 0} />
      <div className="statistic_box">
        {totalFeedback > 0 ? <Feedback feedback={feedback} total={totalFeedback} PerPosFeed={PerPositiveFeedback}/> : <Notification/>}
      </div>
    </div>
  );
}

export default App;
