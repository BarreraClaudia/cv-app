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
        onShow={() => setActiveIndex(0)}
      >
        <NameForm data={data} updateData={updateData} />
      </Panel>
      <Panel
        title="Contact"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <ContactForm data={data} updateData={updateData} />
      </Panel>
      <Panel
        title="Summary"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        <SummaryForm data={data} updateData={updateData} />
      </Panel>
      <Panel
        title="Education"
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
      >
        <EducationForm data={data} updateData={updateData} />
      </Panel>
      <Panel
        title="Experience"
        isActive={activeIndex === 4}
        onShow={() => setActiveIndex(4)}
      >
        <WorkForm data={data} updateData={updateData} />
      </Panel>
    </div>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <div className="panel-heading-and-button">
        <h2 className="panel-heading">{title}</h2>
        <button onClick={onShow} className="panel-show-button">
          <ChevronDown />
        </button>
      </div>
      {isActive && <>{children}</>}
    </section>
  );
}
