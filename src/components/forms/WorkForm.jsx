import { useState } from 'react';

import Input from './Input';

export default function WorkForm({ data, updateData }) {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [yearStart, setYearStart] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const [details, setDetails] = useState([]);
  const [currentDetail, setCurrentDetail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    updateData({
      ...data,
      work: [
        ...data.work,
        {
          id: crypto.randomUUID(),
          jobTitle,
          company,
          yearStart,
          yearEnd,
          details,
        },
      ],
    });
  }

  function handleAddDetail(e) {
    e.preventDefault();
    setDetails([...details, { id: crypto.randomUUID(), text: currentDetail }]);
    setCurrentDetail(''); // reset input
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type={'text'}
          label={'Job Title'}
          placeholder={'Web Dev'}
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />

        <Input
          type={'text'}
          label={'Company'}
          placeholder={'X Inc.'}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <Input
          type={'number'}
          label={'Year Started'}
          placeholder={'20XX'}
          value={yearStart}
          onChange={(e) => setYearStart(e.target.value)}
        />

        <Input
          type={'number'}
          label={'Year Ended'}
          placeholder={'20XX'}
          value={yearEnd}
          onChange={(e) => setYearEnd(e.target.value)}
        />

        <Input
          type={'text'}
          label={'Details'}
          placeholder={'This is what I did...'}
          value={currentDetail}
          onChange={(e) => setCurrentDetail(e.target.value)}
        />

        <button type={'button'} onClick={handleAddDetail}>
          Add Detail
        </button>

        <ul>
          {details.map((d) => (
            <li key={d.id}>{d.text}</li>
          ))}
        </ul>

        <button>Submit</button>
      </form>
    </>
  );
}
