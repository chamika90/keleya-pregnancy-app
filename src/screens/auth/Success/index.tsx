import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Res from '../../../resources';
import styles from './styles';
import {theme} from '../../../config/theme';
import CustomButton, {ButtonTypes} from '../../../components/CustomButton';
import FooterBar from '../../../components/FooterBar';

const {colors} = theme;
const {Images} = Res;

/*
 * Success Screen
 */
const Success = ({navigation}) => {
  const onSkipButtonPress = () => {};

  const onNotificationButtonPress = () => {};

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={colors.primaryBackgroundColor}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <ImageBackground
          source={Images.notifications_img}
          style={styles.container}
          resizeMode="cover"
        />
        <View style={styles.header}>
          <View style={styles.bellIcon}>
            <Icon name={'bell'} size={40} />
          </View>

          <Text style={styles.headerTitle}>
            Get notifications to boost {'\n'} your motivation
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.skipButton}>
            <CustomButton
              isButtonDisabled={false}
              buttonType={ButtonTypes.secondary}
              title={'Skip'}
              onButtonPress={() => {
                onSkipButtonPress();
              }}
            />
          </View>
          <View style={styles.notificationButton}>
            <CustomButton
              isButtonDisabled={false}
              buttonType={ButtonTypes.primary}
              title={'Allow notifications'}
              onButtonPress={() => {
                onNotificationButtonPress();
              }}
            />
          </View>

          <View style={styles.footerBarContainer}>
            <FooterBar gradientColors={['#000000', '#000000']} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Success;
