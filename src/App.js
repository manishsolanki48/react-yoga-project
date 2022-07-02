import React from 'react';
import './App.css';
import Bannersection from './Banner-section';
import Servicesetion from './Service-section';
import AboutUSsection from './AboutUS-section';
import Gallerysection from './Gallery-section';
import Gallerydata from './Gallerydata';
import Productionsection from './Production-section';
import Productiondata from './Productiondata';
import Blogsection from './Blog-section';
import Summerclassesetion from './Summerclasse-section';
import Summerdata from './Summerdata';
import Promosection from './Promo-section';
import Footersection from './Footer-section';
import Topheader from './Top-header';

function App() {
  return (
    <>
      <Topheader></Topheader>
      <Bannersection></Bannersection>
      <Servicesetion></Servicesetion>
      <AboutUSsection></AboutUSsection>
      <Gallerydata></Gallerydata>
      <Productiondata></Productiondata>
      <Blogsection></Blogsection>
      <Summerclassesetion></Summerclassesetion>
      <Promosection></Promosection>
      <Footersection></Footersection>
    </>
  );
}

export default App;
