import React from 'react';
import renderer from 'react-test-renderer';
import Presentation from './index';

describe('<Presentation />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Presentation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
