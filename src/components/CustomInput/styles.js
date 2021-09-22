import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    //backgroundColor: 'red',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryBorderColor,
    marginBottom: 5,
  },
  input: {
    flex: 3,
    // backgroundColor: 'green',
  },
  eyeIcon: {
    flex: 0.5,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
