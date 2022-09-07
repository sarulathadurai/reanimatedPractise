import {
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
  BlurMask,
} from '@shopify/react-native-skia';
import React from 'react';

export default function BackgroundGradient({width, height}) {
  const canvaPadding = 40;
  return (
    <Canvas
      style={{width: width + canvaPadding, height: height + canvaPadding}}>
      <RoundedRect
        x={canvaPadding / 2}
        y={canvaPadding / 2}
        width={width}
        height={height}
        color={'white'}
        r={20}>
        <SweepGradient
          c={vec((width + canvaPadding) / 2, (height + canvaPadding) / 2)}
          colors={['cyan', 'magenta', 'yellow', 'cyan']}
        />
        <BlurMask blur={10} style="solid" />
      </RoundedRect>
    </Canvas>
  );
}
