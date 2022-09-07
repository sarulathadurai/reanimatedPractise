import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Color Interpolation"
        onPress={() => navigation.navigate('ColorInterpolation')}
      />
      <Button
        title="Basic Animation"
        onPress={() => navigation.navigate('BasicAnimation')}
      />
      <Button
        title="PanGesture Animation"
        onPress={() => navigation.navigate('PanGestureAnimation')}
      />
      <Button
        title="Pinch GestureHandler"
        onPress={() => navigation.navigate('PinchGestureHandlerAnim')}
      />
      <Button
        title="Scroll Interpolate"
        onPress={() => navigation.navigate('ScrollInterpolate')}
      />
      <Button
        title="Card Animation"
        onPress={() => navigation.navigate('CardAnimation')}
      />
      <Button
        title="ImageShaders"
        onPress={() => navigation.navigate('ImageShaders')}
      />
    </View>
  );
};

export default HomeScreen;
