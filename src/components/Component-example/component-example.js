import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import exampleAction from 'actions/exampleState';

const ComponentExample = ({ label, styles }) => {
  const counter = useSelector((state) => state.exampleState);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(exampleAction(counter + 1));
  };

  return (
    <TouchableOpacity
      testID="componentExample__button"
      style={styles.root}
      onPress={handleClick}
    >
      <Text
        testID="componentExample__text"
      >
        {label}
        {' '}
        :
        {' '}
        {counter}
      </Text>
    </TouchableOpacity>
  );
};

export default ComponentExample;
