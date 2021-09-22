import {StyleSheet} from 'react-native';
import {theme} from '../../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    marginTop: 30,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  header: {
    position: 'absolute',
    alignItems: 'center',
  },
  headerTitle: {
    marginTop: 20,
    fontSize: 20,
    color: colors.primaryTitleColor,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    bottom: 2,
  },
  signInButton: {
    width: '60%',
    height: 40,
  },
  signUpButton: {width: '60%', height: 30, marginTop: 5},
  dotContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
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
