import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import Res from '../../../resources';
import styles from './styles';
import {theme} from '../../../config/theme';
import CustomButton, {ButtonTypes} from '../../../components/CustomButton';
import FooterBar from '../../../components/FooterBar';
import CustomWheelPicker from '../../../components/CustomWheelPicker';

import {ACTIVE_TIME_LIST} from '../../../config/constants';
import {IUserWorkoutInfo} from '../../../types/storeTypes';
import {useAppDispatch} from '../../../hooks';
import {saveUserWorkoutInfo} from '../../../redux/actions';
import BackButton from '../../../components/BackButton';

const {colors} = theme;
const {Images} = Res;

/*
 * Workout Screen
 */
const Workout = ({navigation}) => {
  const dispatch = useAppDispatch();

  const [isButtonDisabled, setButtonStatus] = useState(true);
  const [activeTime, setActiveTime] = useState(ACTIVE_TIME_LIST[2]);

  const continueButtonPress = () => {
    const user: IUserWorkoutInfo = {
      workoutPlan: activeTime,
    };
    dispatch(saveUserWorkoutInfo(user));
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Success'}],
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryBackgroundColor}
        barStyle="light-content"
      />

      <View style={styles.imageContainer}>
        <ImageBackground
          source={Images.workout_img}
          style={styles.imageBg}
          resizeMode="cover"
        />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            How many times a week do you want to be active ?
          </Text>
        </View>
      </View>
      <BackButton
        onBackButtonPress={() => {
          navigation.goBack(null);
          return true;
        }}
      />
      <View style={styles.inputContainer}>
        <CustomWheelPicker
          itemList={ACTIVE_TIME_LIST}
          selectedValue={activeTime}
          onPickerSelect={result => {
            setActiveTime(result);
            setButtonStatus(false);
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
              continueButtonPress();
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

export default Workout;
