// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import WrapWithRedux from './wrapWithRedux';
import WrapWithRouting from './wrapWithRouting';

export default function App() {
  return (
    <WrapWithRedux>
      <WrapWithRouting />
    </WrapWithRedux>
  );
}
