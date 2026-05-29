import { useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
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

    setJobTitle('');
    setCompany('');
    setYearStart('');
    setYearEnd('');
    setDetails([]);
  }

  function handleAddDetail(e) {
    e.preventDefault();
    setDetails([...details, { id: crypto.randomUUID(), text: currentDetail }]);
    setCurrentDetail(''); // reset input
  }

  function handleEditDetail(d) {
    setCurrentDetail(d.text);

    // remove detail so it doesn't appear twice after resubmit
    const filteredDetails = details.filter((detail) => detail.id !== d.id);
    setDetails(filteredDetails);
  }

  function handleDeleteDetail(d) {
    const filteredDetails = details.filter((detail) => detail.id !== d.id);
    setDetails(filteredDetails);
  }

  function handleEditJob(w) {
    setJobTitle(w.jobTitle);
    setCompany(w.company);
    setYearStart(w.yearStart);
    setYearEnd(w.yearEnd);
    setDetails(w.details);

    // remove job so it doesn't appear twice after resubmit
    const filteredData = data.work.filter((job) => job.id !== w.id);
    updateData({ ...data, work: [...filteredData] });
  }

  function handleDeleteJob(w) {
    const filteredData = data.work.filter((job) => job.id !== w.id);
    updateData({ ...data, work: [...filteredData] });
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

        <ul className="form-details-list">
          {details.map((d) => (
            <li key={d.id} className="form-detail">
              {d.text}
              <div className="detail-buttons-wrapper">
                <Pencil onClick={() => handleEditDetail(d)} />
                <Trash onClick={() => handleDeleteDetail(d)} />
              </div>
            </li>
          ))}
        </ul>

        <div className="add-detail-and-submit-buttons-wrapper">
          <button
            type={'button'}
            onClick={handleAddDetail}
            className="add-detail-button"
          >
            Add Detail
          </button>
          <button className="submit-button">Submit</button>
        </div>
      </form>

      <div>
        {data.work.map((w) => (
          <div key={w.id} className="form-work-card">
            <h3>{w.jobTitle}</h3>
            <p>{w.company}</p>
            <p>
              {w.yearStart} to {w.yearEnd}
            </p>
            <ul>
              {w.details.map((d) => (
                <li key={d.id}>{d.text}</li>
              ))}
            </ul>
            <div className="work-buttons-container">
              <Pencil onClick={() => handleEditJob(w)} />
              <Trash onClick={() => handleDeleteJob(w)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
