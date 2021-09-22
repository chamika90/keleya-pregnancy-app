import {StyleSheet} from 'react-native';
import {theme} from './theme';

const {colors} = theme;

const typography = StyleSheet.create({
  headerTitle: {
    color: colors.primaryTitleColor,
    fontSize: 20,
  },
  checkBoxTitle: {
    color: colors.primaryTitleColor,
    fontSize: 15,
  },
  inputErrorMessage: {
    color: colors.errorColor,
    fontSize: 10,
  },
});

export {typography};
