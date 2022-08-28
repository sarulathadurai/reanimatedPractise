import {Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
export default function PinchGestureHandlerAnim() {
  const {width, height} = Dimensions.get('screen');
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  const pinchHandler = useAnimatedGestureHandler({
    onActive: event => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onEnd: () => {
      scale.value = withTiming(1);
    },
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const focalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={pinchHandler}>
      <Animated.View style={{flex: 1}}>
        <AnimatedImage
          style={[{flex: 1}, rStyle]}
          source={{
            uri: 'https://wallpaperaccess.com/full/3292878.jpg',
          }}
          resizeMode="cover"
        />
        <Animated.View style={[styles.focalPoint, focalPointStyle]} />
      </Animated.View>
    </PinchGestureHandler>
  );
}

const styles = StyleSheet.create({
  focalPoint: {
    ...StyleSheet.absoluteFill,
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});
