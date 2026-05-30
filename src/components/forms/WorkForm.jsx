import { useState } from 'react';
import { Pencil, Trash, ArrowUp, ArrowDown } from 'lucide-react';
import Input from './Input';

export default function WorkForm({ data, updateData }) {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [yearStart, setYearStart] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const [details, setDetails] = useState([]);
  const [currentDetail, setCurrentDetail] = useState('');
  const [errors, setErrors] = useState({
    jobTitle: '',
    company: '',
    yearStart: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = { degree: '', school: '', year: '' };

    if (jobTitle === '') newErrors.jobTitle = 'This field is required.';
    if (company === '') newErrors.company = 'This field is required.';
    if (yearStart === '') newErrors.yearStart = 'This field is required.';

    setErrors(newErrors);

    if (newErrors.jobTitle || newErrors.company || newErrors.yearStart) return;

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

  function handleMoveUpDetail(index) {
    if (index === 0) return;
    const newDetails = [...details];
    [newDetails[index - 1], newDetails[index]] = [
      newDetails[index],
      newDetails[index - 1],
    ];
    setDetails(newDetails);
  }

  function handleMoveDownDetail(index) {
    if (index === details.length - 1) return;
    const newDetails = [...details];
    [newDetails[index + 1], newDetails[index]] = [
      newDetails[index],
      newDetails[index + 1],
    ];
    setDetails(newDetails);
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

  function handleMoveUpJob(index) {
    if (index === 0) return;
    const newWork = [...data.work];
    [newWork[index - 1], newWork[index]] = [newWork[index], newWork[index - 1]];
    updateData({ ...data, work: newWork });
  }

  function handleMoveDownJob(index) {
    if (index === data.work.length - 1) return;
    const newWork = [...data.work];
    [newWork[index + 1], newWork[index]] = [newWork[index], newWork[index + 1]];
    updateData({ ...data, work: newWork });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type={'text'}
          label={'Job Title *'}
          placeholder={'Web Dev'}
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          error={errors.jobTitle}
        />

        <Input
          type={'text'}
          label={'Company *'}
          placeholder={'X Inc.'}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          error={errors.company}
        />

        <Input
          type={'number'}
          label={'Year Started *'}
          placeholder={'20XX'}
          value={yearStart}
          onChange={(e) => setYearStart(e.target.value)}
          error={errors.yearStart}
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
          {details.map((d, index) => (
            <li key={d.id} className="form-detail">
              {d.text}
              <div className="detail-buttons-wrapper">
                <ArrowUp
                  onClick={() => handleMoveUpDetail(index)}
                  className={index === 0 ? 'disabled' : ''}
                />
                <ArrowDown
                  onClick={() => handleMoveDownDetail(index)}
                  className={index === details.length - 1 ? 'disabled' : ''}
                />
                <Pencil
                  className="pencil-button"
                  onClick={() => handleEditDetail(d)}
                />
                <Trash
                  className="trash-button"
                  onClick={() => handleDeleteDetail(d)}
                />
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

      <div className="entries-list">
        {data.work.map((w, index) => (
          <div key={w.id} className="form-work-card">
            <h3>{w.jobTitle}</h3>
            <p>{w.company}</p>
            <p>{w.yearEnd ? w.yearStart + ' - ' + w.yearEnd : w.yearStart}</p>
            <ul>
              {w.details.map((d) => (
                <li key={d.id}>{d.text}</li>
              ))}
            </ul>
            <div className="work-buttons-container">
              <ArrowUp
                onClick={() => handleMoveUpJob(index)}
                className={index === 0 ? 'disabled' : ''}
              />
              <ArrowDown
                onClick={() => handleMoveDownJob(index)}
                className={index === data.work.length - 1 ? 'disabled' : ''}
              />
              <Pencil
                className="pencil-button"
                onClick={() => handleEditJob(w)}
              />
              <Trash
                className="trash-button"
                onClick={() => handleDeleteJob(w)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
