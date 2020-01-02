import React from 'react';
import Hero from './Hero';

const TemplateWithHero = ({ children, hero }) => (
  <>
    <Hero hero={hero}></Hero>
    {children}
  </>
);

export default TemplateWithHero;
