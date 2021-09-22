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
import {formatDate} from '../../../helper/utils';
import CustomButton, {ButtonTypes} from '../../../components/CustomButton';
import FooterBar from '../../../components/FooterBar';
import CustomDatePicker from '../../../components/CustomDatePicker';
import {IUserPregnancyInfo} from '../../../types/storeTypes';
import {saveUserPregnancyInfo} from '../../../redux/actions';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import BackButton from '../../../components/BackButton';

const {colors} = theme;
const {Images} = Res;

/*
 * Due Date Screen
 */
const DueDate = ({navigation}) => {
  const dispatch = useAppDispatch();

  const [isButtonDisabled, setButtonStatus] = useState(true);
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');
  const userName = useAppSelector(state => state.userReducer.name);

  const formatDueDate = useCallback(() => {
    let dateFormatted: string;
    dateFormatted = formatDate(date);
    setFormattedDate(dateFormatted);
  }, [date]);

  useEffect(() => {
    formatDueDate();
  }, [formatDueDate]);

  const continueToWorkout = () => {
    const user: IUserPregnancyInfo = {
      dueDate: date,
    };
    dispatch(saveUserPregnancyInfo(user));
    navigation.navigate('Workout');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryBackgroundColor}
        barStyle="light-content"
      />

      <View style={styles.imageContainer}>
        <ImageBackground
          source={Images.due_date_img}
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
          When is your baby due ? {userName && userName}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <CustomDatePicker
          selectedDate={date}
          formattedDate={formattedDate}
          onConfirmDate={selectedDate => {
            setDate(selectedDate);
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
              continueToWorkout();
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

export default DueDate;
