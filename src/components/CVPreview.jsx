import { Mail, Phone, Globe } from 'lucide-react';

export default function CVPreview({ data }) {
  return (
    <div>
      <CVName data={data} />
      <div className="cv-grid">
        <div className="cv-left">
          <CVContact data={data} />
          <CVEducation data={data} />
        </div>
        <div className="cv-right">
          <CVSummary data={data} />
          <CVWork data={data} />
        </div>
      </div>
    </div>
  );
}

function CVName({ data }) {
  const name = data.fullName || 'Jane Doe';
  const title = data.title || 'Web Developer';

  return (
    <div className="cv-name-wrapper">
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}

function CVContact({ data }) {
  const email = data.contact.email || 'janedoe@mail.com';
  const phone = data.contact.phone || '(333)333-333';
  const website = data.contact.website || 'www.portfolio.com';

  return (
    <div className="cv-contact-wrapper">
      <div>
        <Mail />
        <p>{email}</p>
      </div>
      <div>
        <Phone />
        <p>{phone}</p>
      </div>
      <div>
        <Globe />
        <p>{website}</p>
      </div>
    </div>
  );
}

function CVSummary({ data }) {
  const summary =
    data.summary ||
    'I am a great employee. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className="cv-summary-wrapper">
      <h3>Summary</h3>
      <p>{summary}</p>
    </div>
  );
}

function CVEducation({ data }) {
  return (
    <div>
      <h3>Education</h3>
      {data.education.length === 0 ? (
        <p>No education added yet</p>
      ) : (
        data.education.map((ed) => (
          <div key={ed.id}>
            <h3>{ed.degree}</h3>
            <p>{ed.school}</p>
            <p>{ed.year}</p>
          </div>
        ))
      )}
    </div>
  );
}

function CVWork({ data }) {
  return (
    <div>
      <h3>Experience</h3>
      {data.work.length === 0 ? (
        <p>No work experience added yet</p>
      ) : (
        data.work.map((w) => (
          <div key={w.id}>
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
          </div>
        ))
      )}
    </div>
  );
}
