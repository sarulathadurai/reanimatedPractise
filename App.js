import React from 'react';
import {View, StyleSheet} from 'react-native';
import BasicAnimation from './screens/BasicAnimation';
import PanGestureAnimation from './screens/PanGestureAnimation';
import PinchGestureHandlerAnim from './screens/PinchGestureHandlerAnim';
import ScrollInterpolate from './screens/ScrollInterpolate';

const App = () => {
  return <PinchGestureHandlerAnim />;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
