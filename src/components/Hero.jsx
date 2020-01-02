import React from 'react';
import { parseAndSanitizeHtml } from '../utils/parseAndSanitizeHtml';

const getHeroContent = hero => {
  const { REACT_APP_CMS_URL } = process.env;
  const { background_image, heading_text, cta_text } = hero;
  const heroBackgroundImage = {
    backgroundImage: `url(${REACT_APP_CMS_URL}${background_image.url})`
  };
  return (
    <section className='hero' style={heroBackgroundImage}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4'>
            <h2>{parseAndSanitizeHtml(heading_text)}</h2>
            <button type='button' className='btn btn-primary'>
              {cta_text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = ({ hero }) => {
  return hero ? getHeroContent(hero) : '';
};

export default Hero;
