import NameForm from './forms/NameForm';
import ContactForm from './forms/ContactForm';
import AboutMeForm from './forms/AboutMeForm';
import EducationForm from './forms/EducationForm';
import WorkForm from './forms/WorkForm';

export default function Accordion({
  data,
  updateData,
  activeIndex,
  setActiveIndex,
}) {
  return (
    <>
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
        title="About Me"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        <AboutMeForm data={data} updateData={updateData} />
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
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      <button onClick={onShow}>⌄</button>
      {isActive && <>{children}</>}
    </section>
  );
}
