import { useState } from 'react';
import Input from './Input';
import '../../styles/Forms.css';

export default function NameForm({ data, updateData }) {
  const [fullName, setFullName] = useState(data.fullName);
  const [title, setTitle] = useState(data.title);

  function handleSubmit(e) {
    e.preventDefault(); // Prevents the browser from refreshing
    updateData({
      ...data, // Spreads existing data to keep other fields
      fullName, // Updates fullName
      title, // Updates title
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type={'text'}
        label={'Full Name'}
        placeholder={'Jane Doe'}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <Input
        type={'text'}
        label={'Title'}
        placeholder={'Web Developer'}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="submit-button">Submit</button>
    </form>
  );
}
