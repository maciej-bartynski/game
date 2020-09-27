import React, { useState as useStateMock } from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import Test from './component.example';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe('<Test />', () => {

  let mockedState = false;

  beforeEach(() => {
    const setState = jest.fn(() => mockedState = "state changed");
    useStateMock.mockImplementation(init => [init, setState]);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Test />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has 1 child', () => {
    const tree = renderer.create(<Test />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it('is pressed correctly', () => {
    const ComponentRendered = render(<Test />);
    const button = ComponentRendered.getByTestId('componentExample__button');
    expect(mockedState).not.toBe("state changed");
    fireEvent.press(button);
    expect(mockedState).toBe("state changed");
  });
});