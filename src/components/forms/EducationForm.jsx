import { useState } from 'react';
import { Pencil, Trash, ArrowUp, ArrowDown } from 'lucide-react';
import Input from './Input';

export default function EducationForm({ data, updateData }) {
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [year, setYear] = useState('');
  const [errors, setErrors] = useState({
    degree: '',
    school: '',
    year: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = { degree: '', school: '', year: '' };

    if (degree === '') newErrors.degree = 'This field is required.';
    if (school === '') newErrors.school = 'This field is required.';
    if (year === '') newErrors.year = 'This field is required.';

    setErrors(newErrors);

    if (newErrors.degree || newErrors.school || newErrors.year) return;

    updateData({
      ...data,
      education: [
        ...data.education,
        { id: crypto.randomUUID(), degree, school, year },
      ],
    });

    setDegree('');
    setSchool('');
    setYear('');
  }

  function handleEdit(ed) {
    setDegree(ed.degree);
    setSchool(ed.school);
    setYear(ed.year);

    const filteredEducation = data.education.filter(
      (educ) => educ.id !== ed.id,
    );
    updateData({ ...data, education: [...filteredEducation] });
  }

  function handleDelete(ed) {
    const filteredEducation = data.education.filter(
      (educ) => educ.id !== ed.id,
    );
    updateData({ ...data, education: [...filteredEducation] });
  }

  function handleMoveUp(index) {
    if (index === 0) return;
    const newEducation = [...data.education];
    [newEducation[index - 1], newEducation[index]] = [
      newEducation[index],
      newEducation[index - 1],
    ];
    updateData({ ...data, education: newEducation });
  }

  function handleMoveDown(index) {
    if (index === data.education.length - 1) return;
    const newEducation = [...data.education];
    [newEducation[index + 1], newEducation[index]] = [
      newEducation[index],
      newEducation[index + 1],
    ];
    updateData({ ...data, education: newEducation });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type={'text'}
          label={'Degree'}
          placeholder={'Bachelor of Technology'}
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          error={errors.degree}
        />

        <Input
          type={'text'}
          label={'School'}
          placeholder={'X University'}
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          error={errors.school}
        />

        <Input
          type={'text'}
          label={'Year'}
          placeholder={'20XX'}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          error={errors.year}
        />

        <button className="submit-button">Submit</button>
      </form>

      <div className="entries-list">
        {data.education.map((ed, index) => (
          <div key={ed.id} className="form-education-card">
            <h3>{ed.degree}</h3>
            <p>
              {ed.school} • {ed.year}
            </p>
            <div className="education-buttons-container">
              <ArrowUp
                onClick={() => handleMoveUp(index)}
                className={index === 0 ? 'disabled' : ''}
              />
              <ArrowDown
                onClick={() => handleMoveDown(index)}
                className={
                  index === data.education.length - 1 ? 'disabled' : ''
                }
              />
              <Pencil onClick={() => handleEdit(ed)} />
              <Trash onClick={() => handleDelete(ed)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
