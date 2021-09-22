import React from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

import styles from './styles';

interface Props {
  isSelected: boolean;
  title: string;
  onCheckBoxSelected: () => void;
}

/*
 * Check box
 */
const CustomCheckBox: React.FC<Props> = ({
  isSelected,
  title,
  onCheckBoxSelected,
}) => {
  return (
    <View style={styles.container}>
      <CheckBox
        checked={isSelected}
        onPress={() => {
          onCheckBoxSelected();
        }}
        style={styles.checkbox}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomCheckBox;
