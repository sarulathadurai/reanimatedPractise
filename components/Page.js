import React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const SIZE = width * 0.7;

export const Page = ({index, title, translateX}) => {
  const inputValue = [(index - 1) * width, index * width, (index + 1) * width];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputValue,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const borderRadius = interpolate(
      translateX.value,
      inputValue,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{scale}],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputValue,
      [height / 2, 0, -(height / 2)],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      translateX.value,
      inputValue,
      [-2, 1, -2],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
      transform: [{translateY}],
    };
  });
  return (
    <View
      style={[
        styles.pageContainer,
        {backgroundColor: `rgba(0,0,256,0.${index + 2})`},
      ]}>
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[{position: 'absolute'}, rTextStyle]}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'rgba(0,0,226,0.4)',
  },
  title: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 70,
    fontWeight: '700',
  },
});
