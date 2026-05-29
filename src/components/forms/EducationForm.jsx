import { useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type={'text'}
          label={'Degree'}
          placeholder={'Bachelor of Technology'}
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

        <button className="submit-button">Submit</button>
      </form>

      <div>
        {data.education.map((ed) => (
          <div key={ed.id} className="form-education-card">
            <h3>{ed.degree}</h3>
            <p>
              {ed.school} • {ed.year}
            </p>
            <div className="education-buttons-container">
              <Pencil onClick={() => handleEdit(ed)} />
              <Trash onClick={() => handleDelete(ed)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
