import {StyleSheet} from 'react-native';
import {typography} from '../../config/typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBox: {
    flex: 1,
  },
  title: {
    ...typography.checkBoxTitle,
    flex: 3,
  },
});

export default styles;
