import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {Page} from '../components/Page';
const WORDS = ["What's", 'up', 'mobile', 'devs?'];

export default function ScrollInterpolate() {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
    console.log(translateX.value);
  });

  return (
    <Animated.ScrollView
      pagingEnabled
      scrollEventThrottle={16}
      horizontal
      onScroll={scrollHandler}
      style={styles.container}>
      {WORDS.map((item, index) => (
        <Page title={item} index={index} translateX={translateX} />
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
