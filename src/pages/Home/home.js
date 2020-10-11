import React from 'react';
import { View, Text } from 'react-native';
import ComponentExample from 'components/Component-example';

const style = { flex: 1, justifyContent: 'center', alignItems: 'center' };
export default function Home() {
  return (
    <View style={style}>
      <Text>Home page</Text>
      <ComponentExample label="Button was clicked times" />
    </View>
  );
}
