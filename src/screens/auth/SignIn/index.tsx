import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  ImageBackground,
  Text,
} from 'react-native';

import Res from '../../../resources';
import styles from './styles';
import {theme} from '../../../config/theme';
import CustomInput, {InputTypes} from '../../../components/CustomInput';
import CustomButton, {ButtonTypes} from '../../../components/CustomButton';
import FooterBar from '../../../components/FooterBar';
import ErrorMessageView from '../../../components/ErrorMessageView';
import StorageHelper from '../../../helper/StorageHelper';
import {
  STORAGE_KEY_EMAIL,
  STORAGE_KEY_PASSWORD,
} from '../../../config/constants';
import BackButton from '../../../components/BackButton';
import {CommonActions} from '@react-navigation/native';

const {colors} = theme;
const {Images} = Res;

/*
 * Sign In Screen
 */
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setButtonStatus] = useState(true);
  const [errorSignIn, setErrorSignIn] = useState('');

  const checkButtonStatus = useCallback(() => {
    email !== '' && password !== ''
      ? setButtonStatus(false)
      : setButtonStatus(true);
  }, [email, password]);

  useEffect(() => {
    checkButtonStatus();
  }, [checkButtonStatus]);

  const onChangeEmail = txt => {
    setEmail(txt);
  };

  const onChangePassword = pwd => {
    setPassword(pwd);
  };

  const signIn = async () => {
    const storedEmail = await StorageHelper.getItem(STORAGE_KEY_EMAIL);
    const storedPassword = await StorageHelper.getItem(STORAGE_KEY_PASSWORD);

    if (storedEmail && storedPassword) {
      if (email === storedEmail && password === storedPassword) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Success'}],
          }),
        );
      } else {
        setErrorSignIn('Please enter valid credentials');
      }
    } else {
      setErrorSignIn("Don't have account ? Please sign up first.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryBackgroundColor}
        barStyle="light-content"
      />
      <View style={styles.imageContainer}>
        <ImageBackground
          source={Images.auth_img}
          style={styles.imageBg}
          resizeMode="cover"
        />
      </View>
      <BackButton
        onBackButtonPress={() => {
          navigation.goBack(null);
          return true;
        }}
      />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome back!</Text>
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          placeholder={'example@gmail.com'}
          inputType={InputTypes.email}
          onTextChange={emailTxt => {
            onChangeEmail(emailTxt);
          }}
        />
        <CustomInput
          placeholder={'Enter a password'}
          inputType={InputTypes.password}
          onTextChange={passwordTxt => {
            onChangePassword(passwordTxt);
          }}
        />
        <ErrorMessageView message={errorSignIn} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <CustomButton
            isButtonDisabled={false}
            buttonType={ButtonTypes.secondary}
            title={'Have you forgotten your password?'}
            onButtonPress={() => {
              signIn();
            }}
          />
        </View>
        <View style={styles.button}>
          <CustomButton
            isButtonDisabled={isButtonDisabled}
            buttonType={ButtonTypes.primary}
            title={'Log in'}
            onButtonPress={() => {
              signIn();
            }}
          />
        </View>
      </View>
      <View style={styles.footerBarContainer}>
        <FooterBar gradientColors={['#000000', '#000000']} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
