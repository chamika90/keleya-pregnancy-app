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
import {IUser} from '../../../types/storeTypes';
import {saveUserInfo} from '../../../redux/actions';
import {useAppDispatch} from '../../../hooks';
import BackButton from '../../../components/BackButton';

const {colors} = theme;
const {Images} = Res;

/*
 * Your Name Screen
 */
const YourName = ({navigation}) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [isButtonDisabled, setButtonStatus] = useState(true);

  const checkButtonStatus = useCallback(() => {
    name !== '' ? setButtonStatus(false) : setButtonStatus(true);
  }, [name]);

  useEffect(() => {
    checkButtonStatus();
  }, [checkButtonStatus]);

  const onChangeName = txt => {
    setName(txt);
  };

  const continueToDueDate = () => {
    const user: IUser = {
      name: name,
    };
    dispatch(saveUserInfo(user));
    navigation.navigate('DueDate');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryBackgroundColor}
        barStyle="light-content"
      />

      <View style={styles.imageContainer}>
        <ImageBackground
          source={Images.couch_smile_img}
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
          It's great that you are here! First {'\n'} things first, What should
          we {'\n'} call you ?
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          placeholder={'Your Name'}
          inputType={InputTypes.email}
          onTextChange={nameTxt => {
            onChangeName(nameTxt);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <CustomButton
            isButtonDisabled={isButtonDisabled}
            buttonType={ButtonTypes.primary}
            title={'Continue'}
            onButtonPress={() => {
              continueToDueDate();
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

export default YourName;
