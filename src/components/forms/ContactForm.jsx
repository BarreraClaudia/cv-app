import { useState } from 'react';

import Input from './Input';

export default function ContactForm({ data, updateData }) {
  const [email, setEmail] = useState(data.contact.email);
  const [phone, setPhone] = useState(data.contact.phone);
  const [website, setWebsite] = useState(data.contact.website);

  function handleSubmit(e) {
    e.preventDefault();
    updateData({
      ...data,
      contact: {
        email,
        phone,
        website,
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type={'email'}
        label={'Email'}
        placeholder={'janedoe@mail.com'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type={'text'}
        label={'Phone Number'}
        placeholder={'(333)333-3333'}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Input
        type={'text'}
        label={'Website'}
        placeholder={'portfolio.com'}
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />

      <button className="submit-button">Submit</button>
    </form>
  );
}
