import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Text,
  View,
  Image,
} from 'react-native';

import Res from '../../../resources';
import styles from './styles';
import {theme} from '../../../config/theme';
import CustomButton, {ButtonTypes} from '../../../components/CustomButton';
import CircleView from '../../../components/CircleView';
import FooterBar from '../../../components/FooterBar';

const {colors} = theme;
const {Images, Colors} = Res;

const dotColors = [
  {id: 0, color: Colors.PaleTeal},
  {id: 1, color: Colors.LightTeal},
  {id: 2, color: Colors.LightBlueTeal},
];

/*
 * Start Screen
 */
const Start = ({navigation}) => {
  const onSignUpButtonClick = () => {
    navigation.navigate('SignUp');
  };

  const onSignInButtonClick = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={colors.primaryBackgroundColor}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <ImageBackground
          source={Images.intro_img}
          style={styles.container}
          resizeMode="cover"
        />
        <View style={styles.header}>
          <Image style={styles.logo} source={Images.ic_logo} />
          <Text style={styles.headerTitle}>
            For a fit and relaxed {'\n'} pregnancy
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.signInButton}>
            <CustomButton
              isButtonDisabled={false}
              buttonType={ButtonTypes.primary}
              title={'Get Started'}
              onButtonPress={() => {
                onSignInButtonClick();
              }}
            />
          </View>
          <View style={styles.signUpButton}>
            <CustomButton
              isButtonDisabled={false}
              buttonType={ButtonTypes.secondary}
              title={'Or login'}
              onButtonPress={() => {
                onSignUpButtonClick();
              }}
            />
          </View>

          <View style={styles.dotContainer}>
            {dotColors.map((item, index) => {
              return <CircleView key={index} bgColor={item.color} size={10} />;
            })}
          </View>

          <View style={styles.footerBarContainer}>
            <FooterBar gradientColors={['#000000', '#4a4a4a', '#9b9b9b']} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Start;
