import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

interface Props {
  itemList: string[];
  selectedValue: number;
  onPickerSelect: (item: number) => void;
}

/*
 * CustomWheelPicker
 */
const CustomWheelPicker: React.FC<Props> = ({
  itemList,
  selectedValue,
  onPickerSelect,
}) => {
  return (
    <View>
      <ScrollPicker
        dataSource={itemList}
        selectedIndex={selectedValue}
        renderItem={(data, index) => {
          return (
            <View style={styles.row}>
              <Text key={index}>{data}</Text>
            </View>
          );
        }}
        onValueChange={(data, dataIndex) => {
          onPickerSelect(dataIndex);
        }}
        wrapperHeight={150}
        itemHeight={50}
        highlightColor="#d8d8d8"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: 200,
    alignItems: 'center',
  },
});
export default CustomWheelPicker;
