import React from 'react';
import Animated from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

const SIZE = 100.0;

export default function PanGestureAnimation() {
  return <Animated.View style={styles.square} />;
}

const styles = StyleSheet.create({
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0,0,256,0.5)',
    borderRadius: 20,
  },
});
