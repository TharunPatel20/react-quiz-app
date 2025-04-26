import React from 'react';

export default function Question(props) {
  const { question, current, total } = props;

  return (
    <div className="text-center my-8">
      <p className="text-gray-500 text-sm mb-2">
        Question {current} / {total}
      </p>
      <h2 className="text-2xl font-semibold">{question}</h2>
    </div>
  );
}
