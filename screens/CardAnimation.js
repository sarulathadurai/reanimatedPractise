import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import Animated, {
  useSharedValue,
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from 'react-native-gesture-handler';

function CardAnimation() {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);
  const {width: CardWidth} = Dimensions.get('screen');
  const HEIGHT = 250;
  const WIDTH = CardWidth * 0.9;
  const CARD_HEIGHT = HEIGHT - 5;
  const CARD_WIDTH = WIDTH - 5;

  const gesture = Gesture.Pan().onUpdate(event => {
    rotateX.value = interpolate(
      event.x,
      [0, CARD_WIDTH],
      [-10, 10],
      Extrapolate.CLAMP,
    );
    rotateY.value = interpolate(
      event.x,
      [0, CARD_HEIGHT],
      [-10, 10],
      Extrapolate.CLAMP,
    );
  });

  const rStyle = useAnimatedStyle(() => {
    const rotateXvalue = `${rotateX.value}deg`;
    const rotateYvalue = `${rotateY.value}deg`;
    return {
      transform: [
        {perspective: 300},
        {rotateX: rotateXvalue},
        {rotateY: rotateYvalue},
      ],
    };
  });

  //topLeft (10deg,-10deg)
  //topRight (10deg,10deg)
  //bottomRight (-10deg,10deg)
  //bottomLeft (-10deg,-10deg)

  return (
    <View style={styles.container}>
      <BackgroundGradient width={WIDTH} height={HEIGHT} />
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            {
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              position: 'absolute',
              backgroundColor: 'black',
              borderRadius: 20,
              zIndex: 300,
            },
            rStyle,
          ]}
        />
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CardAnimation />
    </GestureHandlerRootView>
  );
};
