import React from 'react';
import {View} from 'react-native';

import styles from './styles';

interface Props {
  bgColor: string;
  size: number;
}

/*
 * Circle View
 */
const CircleView: React.FC<Props> = ({bgColor, size}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    />
  );
};

export default CircleView;
