import {StyleSheet} from 'react-native';
import {theme} from '../../../config/theme';
import {typography} from '../../../config/typography';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primaryBackgroundColor,
  },
  imageContainer: {
    width: '100%',
    flex: 3,
  },
  imageBg: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    flex: 1,
    top: 30,
    marginHorizontal: 40,
  },
  headerTitle: {
    ...typography.headerTitle,
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    width: '80%',
  },
  button: {
    height: 40,
    marginBottom: 5,
  },
  footerBarContainer: {
    flex: 0.15,
    width: '100%',
    height: 15,
    paddingBottom: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
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
