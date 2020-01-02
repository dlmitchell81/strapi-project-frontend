import React, { Component } from 'react';
import TemplateWithHero from '../components/TemplateWithHero';
import FeatureList from '../components/FeatureList';

class HomePageContainer extends Component {
  state = {
    loading: true,
    hero: null,
    features: []
  };

  async componentDidMount() {
    try {
      const cms = process.env.REACT_APP_CMS_URL;
      const data = await Promise.all([
        fetch(`${cms}/heroes?page=homepage`).then(response => response.json()),
        fetch(`${cms}/features`).then(response => response.json())
      ]);
      const [[hero], features] = data;
      this.setState({ hero, features });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { hero, features } = this.state;
    return (
      <>
        <TemplateWithHero hero={hero}>
          <FeatureList features={features}></FeatureList>
        </TemplateWithHero>
      </>
    );
  }
}

export default HomePageContainer;
