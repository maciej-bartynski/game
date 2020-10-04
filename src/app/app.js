// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import ComponentExample from 'components/Component-example';
import WrapWithRedux from './wrapWithRedux';

export default function App() {
  return (
    <WrapWithRedux>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <ComponentExample label="Button was clicked times" />
        {/* <StatusBar style="auto" />  */}
      </View>
    </WrapWithRedux>
  );
}
