import { useState } from 'react';

import Input from './Input';

export default function EducationForm({ data, updateData }) {
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [year, setYear] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    updateData({
      ...data,
      education: [
        ...data.education,
        { id: crypto.randomUUID(), degree, school, year },
      ],
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type={'text'}
        label={'Degree'}
        placeholder={'BS in Computer Science'}
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />

      <Input
        type={'text'}
        label={'School'}
        placeholder={'X University'}
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />

      <Input
        type={'text'}
        label={'Year'}
        placeholder={'20XX'}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button>Submit</button>
    </form>
  );
}
