import React from 'react';
import { View } from 'react-native';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';

interface DotProps {
    index: number;
    currentIndex: Animated.Node<number>;
}

const Dot  = ({index, currentIndex}: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index,  index + 1],
    outputRange: [0.5,  1,  0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index,  index + 1],
    outputRange: [1,  1.5,  1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View style={{
      opacity,
      backgroundColor: "#2CB9B0", 
      width: 8, 
      height: 8, 
      borderRadius: 4,
      margin: 8,
      transform: [{scale}],
      }}>

    </Animated.View> 
  );
}

export default Dot;