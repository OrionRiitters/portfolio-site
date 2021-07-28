import React, { useState, useRef, useEffect } from 'react';
import { Section } from '../types'

import PageHeader from './PageHeader';
import NavBar from './NavBar';
import DataService from '../DataService';

const App = () => {
  const [sectionsData, setSectionsData] = useState<Array<Section>|undefined>();
  //TODO get initialData from DataService
  const [initialData, setInitialData] = useState('Home');
  const [currentSection, setCurrentSection] = useState<string>(initialData);

  useEffect(() => {
    (async () => {
      const sectionData = await DataService.fetch('/sections');
      if (Array.isArray(sectionData)) {
        setSectionsData(sectionData);
      }
    })();
  });

  return (
    <>
      <PageHeader username={'POWERFUL ENTITY'} />
      <NavBar sections={sectionsData} setCurrentSection={setCurrentSection} />
    </>
  )
}

export default App