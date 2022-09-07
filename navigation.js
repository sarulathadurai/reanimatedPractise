import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ColorInterpolation from './screens/ColorInterpolation';
import HomeScreen from './screens/HomeScreen';
import BasicAnimation from './screens/BasicAnimation';
import CardAnimation from './screens/CardAnimation';
import ImageShaders from './screens/ImageShaders';
import PanGestureAnimation from './screens/PanGestureAnimation';
import PinchGestureHandlerAnim from './screens/PinchGestureHandlerAnim';
import ScrollInterpolate from './screens/ScrollInterpolate';

const Stack = createNativeStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ColorInterpolation"
          component={ColorInterpolation}
        />
        <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
        <Stack.Screen
          name="PanGestureAnimation"
          component={PanGestureAnimation}
        />
        <Stack.Screen
          name="PinchGestureHandlerAnim"
          component={PinchGestureHandlerAnim}
        />
        <Stack.Screen name="ScrollInterpolate" component={ScrollInterpolate} />
        <Stack.Screen name="CardAnimation" component={CardAnimation} />
        <Stack.Screen name="ImageShaders" component={ImageShaders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
