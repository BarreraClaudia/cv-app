import { useState } from 'react';

export default function SummaryForm({ data, updateData }) {
  const [summary, setSummary] = useState(data.summary);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    let newError = '';

    if (summary === '') newError = 'This field is required.';

    setError(newError);

    if (newError) return;

    updateData({
      ...data,
      summary,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Summary *
        <textarea
          placeholder={'I am a great employee.'}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          error={error}
          className={error ? 'input-error' : ''}
        />
        {error && <span className="error-message">{error}</span>}
      </label>

      <button className="submit-button">Submit</button>
    </form>
  );
}
