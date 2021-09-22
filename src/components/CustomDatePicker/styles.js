import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  datePickerButtonContainer: {
    backgroundColor: colors.primaryPickerButtonBackgroundColor,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 6,
  },
  datePickerTitle: {
    color: colors.primaryPickerButtonTextColor,
  },
});

export default styles;
