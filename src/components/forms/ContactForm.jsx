import { useState } from 'react';

import Input from './Input';

export default function ContactForm({ data, updateData }) {
  const [email, setEmail] = useState(data.contact.email);
  const [phone, setPhone] = useState(data.contact.phone);
  const [website, setWebsite] = useState(data.contact.website);
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    website: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = { email: '', phone: '', website: '' };

    if (email === '') newErrors.email = 'This field is required.';
    if (phone === '') newErrors.phone = 'This field is required.';
    if (website === '') newErrors.website = 'This field is required.';

    const phoneRegex = /^\(\d{3}\)\d{3}-\d{4}$/;

    if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Phone must be in (XXX)XXX-XXXX format.';
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.phone || newErrors.website) return;

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
        label={'Email *'}
        placeholder={'janedoe@mail.com'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />

      <Input
        type={'text'}
        label={'Phone Number *'}
        placeholder={'(333)333-3333'}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={errors.phone}
      />

      <Input
        type={'text'}
        label={'Website *'}
        placeholder={'portfolio.com'}
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        error={errors.website}
      />

      <button className="submit-button">Submit</button>
    </form>
  );
}
