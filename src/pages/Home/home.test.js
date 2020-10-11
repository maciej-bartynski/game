import React from 'react';
import renderer from 'react-test-renderer';
import WrapWithRedux from 'app/wrapWithRedux';
import Home from './index';

describe('<Home />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<WrapWithRedux><Home /></WrapWithRedux>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
