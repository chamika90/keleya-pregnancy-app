import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';

import styles from './styles';

interface Props {
  selectedDate: Date;
  formattedDate: string;
  onConfirmDate: (date: Date) => void;
}

/*
 * CustomDatePicker
 */
const CustomDatePicker: React.FC<Props> = ({
  selectedDate,
  formattedDate,
  onConfirmDate,
}) => {
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.datePickerButtonContainer}
        onPress={() => setDatePickerOpen(true)}>
        <Text style={styles.datePickerTitle}>{formattedDate}</Text>
      </TouchableOpacity>
      <DatePicker
        mode="date"
        modal={true}
        open={isDatePickerOpen}
        date={selectedDate}
        onConfirm={date => {
          setDatePickerOpen(false);
          onConfirmDate(date);
        }}
        onCancel={() => {
          setDatePickerOpen(false);
        }}
        onDateChange={changeDate => {}}
      />
    </View>
  );
};

export default CustomDatePicker;
