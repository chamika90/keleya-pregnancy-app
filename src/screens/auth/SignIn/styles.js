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
    justifyContent: 'center',
    textAlign: 'center',
    flex: 0.75,
  },
  headerTitle: {
    ...typography.headerTitle,
    textAlign: 'center',
  },
  inputContainer: {
    flex: 3,
    marginHorizontal: 10,
    width: '80%',
  },
  buttonContainer: {
    flex: 1,
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
});

export default styles;
