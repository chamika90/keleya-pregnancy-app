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
import CustomCheckBox from '../../../components/CustomCheckBox';
import CustomButton, {ButtonTypes} from '../../../components/CustomButton';
import FooterBar from '../../../components/FooterBar';
import {useAppDispatch} from '../../../hooks';
import {saveUserLoginInfo} from '../../../redux/actions';
import {IUserLoginInfo} from '../../../types/storeTypes';
import ErrorMessageView from '../../../components/ErrorMessageView';
import StorageHelper from '../../../helper/StorageHelper';
import {
  STORAGE_KEY_EMAIL,
  STORAGE_KEY_PASSWORD,
} from '../../../config/constants';
import BackButton from '../../../components/BackButton';

const {colors} = theme;
const {Images} = Res;
const emailRegex = /\S+@\S+\.\S+/;

/*
 * Sign Up Screen
 */
const SignUp = ({navigation}) => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(undefined);
  const [isSelectPrivacyPolicy, setPrivacyPolicyStatus] = useState(false);
  const [isSelectTermsAndCondition, setTermsAndConditionStatus] =
    useState(false);
  const [isButtonDisabled, setButtonStatus] = useState(true);
  const [isValidEmail, setEmailValidityStatus] = useState(true);
  const [invalidEmailError, setEmailValidityError] = useState('');

  const checkButtonStatus = useCallback(() => {
    email !== '' &&
    password !== '' &&
    isSelectPrivacyPolicy &&
    isSelectTermsAndCondition
      ? setButtonStatus(false)
      : setButtonStatus(true);
  }, [email, password, isSelectPrivacyPolicy, isSelectTermsAndCondition]);

  useEffect(() => {
    checkButtonStatus();
  }, [checkButtonStatus]);

  const onChangeEmail = txt => {
    setEmail(txt);
    setEmailValidityError('');
  };

  const onChangePassword = pwd => {
    setPassword(pwd);
  };

  const togglePrivacyPolicy = () => {
    setPrivacyPolicyStatus(!isSelectPrivacyPolicy);
  };

  const toggleTermsAndConditions = () => {
    setTermsAndConditionStatus(!isSelectTermsAndCondition);
  };

  const createAccount = async () => {
    if (emailRegex.test(email)) {
      setEmailValidityStatus(true);
      const user: IUserLoginInfo = {
        email: email,
        password: password,
      };
      await StorageHelper.setItem(STORAGE_KEY_EMAIL, email);
      await StorageHelper.setItem(STORAGE_KEY_PASSWORD, password);

      dispatch(saveUserLoginInfo(user));
      navigation.navigate('Name');
    } else {
      setEmailValidityStatus(false);
      setEmailValidityError('Please enter a valid email');
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
        <Text style={styles.headerTitle}>
          Add your details below to set {'\n'} up an account
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          placeholder={'example@gmail.com'}
          inputType={InputTypes.email}
          onTextChange={emailTxt => {
            onChangeEmail(emailTxt);
          }}
        />
        {!isValidEmail && <ErrorMessageView message={invalidEmailError} />}
        <CustomInput
          placeholder={'Enter a password'}
          inputType={InputTypes.password}
          onTextChange={passwordTxt => {
            onChangePassword(passwordTxt);
          }}
        />

        <CustomCheckBox
          isSelected={isSelectPrivacyPolicy}
          title={"I've read the privacy policy"}
          onCheckBoxSelected={() => {
            togglePrivacyPolicy();
          }}
        />

        <CustomCheckBox
          isSelected={isSelectTermsAndCondition}
          title={"I accept the terms & conditions and Keleya's advice"}
          onCheckBoxSelected={() => {
            toggleTermsAndConditions();
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <CustomButton
            isButtonDisabled={isButtonDisabled}
            buttonType={ButtonTypes.primary}
            title={'Create account'}
            onButtonPress={() => {
              createAccount();
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

export default SignUp;
