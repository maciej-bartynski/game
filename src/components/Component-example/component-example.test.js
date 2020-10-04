import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import WrapWithRedux from 'app/wrapWithRedux';
import Test from './index';

describe('<Test />', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
      <WrapWithRedux>
        <Test />
      </WrapWithRedux>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('is pressed correctly', async () => {
    const ComponentRendered = render(
      <WrapWithRedux>
        <Test label="word" />
      </WrapWithRedux>
    );
    const button = ComponentRendered.getByTestId('componentExample__button');
    const text = ComponentRendered.getByTestId('componentExample__text');
    fireEvent.press(button);
    expect(text.children.join('').trim()).toBe('word : 1');
    fireEvent.press(button);
    expect(text.children.join('').trim()).toBe('word : 2');
  });
});
