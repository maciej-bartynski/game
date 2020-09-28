import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ComponentExample = ({ label, styles }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  return (
    <TouchableOpacity
      testID="componentExample__button"
      style={styles.root}
      onPress={handleClick}
    >
      <Text>
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
