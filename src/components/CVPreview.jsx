import { Mail, Phone, Globe } from 'lucide-react';
import '../styles/CVPreview.css';

export default function CVPreview({ data }) {
  return (
    <div className="cv-preview">
      <CVName data={data} />
      <div className="cv-grid">
        <CVContact data={data} />
        <CVSummary data={data} />
        <CVEducation data={data} />
        <CVWork data={data} />
      </div>
    </div>
  );
}

function CVName({ data }) {
  const name = data.fullName || 'Jane Doe';
  const title = data.title || 'Web Developer';

  return (
    <div className="cv-name-and-title-wrapper">
      <h2 className="cv-name">{name}</h2>
      <p className="cv-title">{title}</p>
    </div>
  );
}

function CVContact({ data }) {
  const email = data.contact.email || 'janedoe@mail.com';
  const phone = data.contact.phone || '(333)333-3333';
  const website = data.contact.website || 'portfolio.com';

  return (
    <>
      <h3 className="cv-info-title">Contact</h3>
      <div className="cv-contact-info-wrapper">
        <div className="cv-icon-and-contact-wrapper">
          <Mail className="contact-icon" />
          <p>{email}</p>
        </div>
        <div className="cv-icon-and-contact-wrapper">
          <Phone className="contact-icon" />
          <p>{phone}</p>
        </div>
        <div className="cv-icon-and-contact-wrapper">
          <Globe className="contact-icon" />
          <p>{website}</p>
        </div>
      </div>
      <hr className="cv-divider" />
    </>
  );
}

function CVSummary({ data }) {
  const summary =
    data.summary ||
    'I am a great employee. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <>
      <h3 className="cv-info-title">Summary</h3>
      <p className="cv-summary">{summary}</p>
      <hr className="cv-divider" />
    </>
  );
}

function CVEducation({ data }) {
  return (
    <>
      <h3 className="cv-info-title">Education</h3>
      <div className="cv-education-info">
        {data.education.length === 0 ? (
          <p>No education added yet</p>
        ) : (
          data.education.map((ed) => (
            <div key={ed.id} className="cv-individual-education-wrapper">
              <h3 className="cv-degree">{ed.degree}</h3>
              <p>{ed.school}</p>
              <p className="cv-year">{ed.year}</p>
            </div>
          ))
        )}
      </div>
      <hr className="cv-divider" />
    </>
  );
}

function CVWork({ data }) {
  return (
    <>
      <h3 className="cv-info-title">Experience</h3>
      <div className="cv-work-info">
        {data.work.length === 0 ? (
          <p>No work experience added yet</p>
        ) : (
          data.work.map((w) => (
            <div key={w.id} className="cv-individual-work-wrapper">
              <h3 className="cv-job-title">{w.jobTitle}</h3>
              <p>{w.company}</p>
              <p className="cv-year">
                {w.yearEnd ? w.yearStart + ' - ' + w.yearEnd : w.yearStart}
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
    </>
  );
}
