import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

const BasicAnimation = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const handleRotation = () => {
    'worklet';
    return `${progress.value * 2 * Math.PI}rad`;
  };

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * 100) / 2,
      transform: [{scale: scale.value}, {rotate: handleRotation(progress)}],
    };
  });

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5, {duration: 5000}), 3, true);
    scale.value = withRepeat(withSpring(2), 3, true);
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {height: 100, width: 100, backgroundColor: 'blue'},
          reanimatedStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BasicAnimation;
