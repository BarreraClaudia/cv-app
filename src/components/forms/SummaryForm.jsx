import { useState } from 'react';

export default function SummaryForm({ data, updateData }) {
  const [summary, setSummary] = useState(data.summary);

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
        label={'Summary'}
        placeholder={'I am a great employee.'}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      ></textarea>

      <button>Submit</button>
    </form>
  );
}
