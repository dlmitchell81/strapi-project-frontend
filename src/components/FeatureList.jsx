import React from 'react';

const getFeaturedItem = feature => {
  const { REACT_APP_CMS_URL } = process.env;
  const { image, title, description, cta_text } = feature;
  return (
    <div className='col-md-3'>
      <div className='card'>
        <div className='card-img-top'>
          <img
            className='img-fluid'
            src={`${REACT_APP_CMS_URL}/${image.url}`}
            alt=''
          />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <button className='btn btn-primary'>{cta_text}</button>
        </div>
      </div>
    </div>
  );
};

const FeatureList = ({ features }) => {
  return features.length ? (
    <section className='featureList'>
      <div className='container'>
        <div className='row'>{features.map(item => getFeaturedItem(item))}</div>
      </div>
    </section>
  ) : (
    ''
  );
};

export default FeatureList;
