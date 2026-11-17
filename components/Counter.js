'use client';
import { useState } from 'react';

export default function Counter({ step = 1, color = 'blue' }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    const next = count + step;
    setCount(next > 10 ? 0 : next); // reset when it exceeds 10
  }

  return (
    <div style={{ margin: '1rem' }}>
      <p>Count: {count}</p>
      <button
        onClick={handleClick}
        style={{ backgroundColor: color, color: 'white', padding: '8px 16px' }}
      >
        +{step}
      </button>
    </div>
  );
}