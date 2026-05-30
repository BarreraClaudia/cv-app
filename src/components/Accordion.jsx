import NameForm from './forms/NameForm';
import ContactForm from './forms/ContactForm';
import SummaryForm from './forms/SummaryForm';
import EducationForm from './forms/EducationForm';
import WorkForm from './forms/WorkForm';
import { ChevronDown } from 'lucide-react';
import '../styles/Accordion.css';

export default function Accordion({
  data,
  updateData,
  activeIndex,
  setActiveIndex,
}) {
  return (
    <div className="accordion">
      <h2 className="accordion-heading">Edit your CV</h2>
      <Panel
        title="Name"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(activeIndex === 0 ? null : 0)}
      >
        <NameForm data={data} updateData={updateData} />
      </Panel>
      <Panel
        title="Contact"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(activeIndex === 1 ? null : 1)}
      >
        <ContactForm data={data} updateData={updateData} />
      </Panel>
      <Panel
        title="Summary"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(activeIndex === 2 ? null : 2)}
      >
        <SummaryForm data={data} updateData={updateData} />
      </Panel>
      <Panel
        title="Education"
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(activeIndex === 3 ? null : 3)}
      >
        <EducationForm data={data} updateData={updateData} />
      </Panel>
      <Panel
        title="Experience"
        isActive={activeIndex === 4}
        onShow={() => setActiveIndex(activeIndex === 4 ? null : 4)}
      >
        <WorkForm data={data} updateData={updateData} />
      </Panel>
    </div>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <button
        className="panel-toggle"
        onClick={onShow}
        aria-label={`Expand ${title} section`}
      >
        <h2>{title}</h2>
        <ChevronDown className={`chevron ${isActive ? 'chevron-open' : ''}`} />
      </button>
      <div className={`panel-content ${isActive ? 'open' : ''}`}>
        {children}
      </div>
    </section>
  );
}
