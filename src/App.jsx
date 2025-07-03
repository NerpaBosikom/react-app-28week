import React, { useState } from 'react';
import './FormattedText.css'; // стили в отдельном файле

const FormattedText = () => {
  const [input, setInput] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const handleClick = () => {
    setFormattedText(input.toUpperCase());
    setInput('');
  };

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите текст"
        className="input"
      />
      <button onClick={handleClick} className="button">Показать</button>
      {formattedText && (
        <p className="result">{formattedText}</p>
      )}
    </div>
  );
};

export default FormattedText;
