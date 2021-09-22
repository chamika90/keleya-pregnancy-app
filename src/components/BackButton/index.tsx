import React from 'react';
import {TouchableOpacity, StyleSheet, ViewProps} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {theme} from '../../config/theme';

const {colors} = theme;

interface BackButtonProps {
  customStyle?: ViewProps['style'];
  onBackButtonPress: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({
  customStyle,
  onBackButtonPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, customStyle ? customStyle : null]}
      onPress={() => {
        onBackButtonPress();
      }}>
      <Icon
        name={'long-arrow-alt-left'}
        size={16}
        color={colors.primaryIconTintColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 15,
    marginTop: 15,
    padding: 10,
  },
});

export default BackButton;
