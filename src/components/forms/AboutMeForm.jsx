import { useState } from 'react';

export default function AboutMeForm({ data, updateData }) {
  const [summary, setSummary] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    updateData({
      ...data,
      summary,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        label={'About Me'}
        placeholder={'I am a great employee.'}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      ></textarea>

      <button>Submit</button>
    </form>
  );
}
