import { useState } from 'react';

import Header from './Header';
import Accordion from './Accordion';
import CVPreview from './CVPreview';

import '../styles/App.css';

const cvDataModel = {
  fullName: '',
  title: '',
  contact: {
    email: '',
    phone: '',
    website: '',
  },
  summary: '',
  education: [
    // {
    //   id: '',
    //   degree: '',
    //   school: '',
    //   year: '',
    // },
  ],
  work: [
    // {
    //   id: '',
    //   jobTitle: '',
    //   company: '',
    //   yearStart: 0,
    //   yearEnd: 0,
    //   details: [{ id: '', text: '' }],
    // },
  ],
};

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cvData, setCVData] = useState(cvDataModel);

  return (
    <>
      <Header />
      <div className="accordion-and-cv-preview-wrapper">
        <Accordion
          data={cvData}
          updateData={setCVData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <CVPreview data={cvData} />
      </div>
    </>
  );
}

export default App;
