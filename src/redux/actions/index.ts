import {
  getUserInfoActionCreator,
  saveUserInfoActionCreator,
  saveUserLoginInfoActionCreator,
  saveUserPregnancyInfoActionCreator,
  saveUserWorkoutInfoActionCreator,
  getUserLoginInfoActionCreator,
} from '../../types/actionCreatorTypes';
import {
  IUser,
  IUserLoginInfo,
  IUserPregnancyInfo,
  IUserWorkoutInfo,
} from '../../types/storeTypes';

export const getUserInfo: getUserInfoActionCreator = () => {
  return {
    type: 'GET_USER_INFO',
  };
};

export const getUserLoginInfo: getUserLoginInfoActionCreator = () => {
  return {
    type: 'GET_USER_LOGIN_INFO',
  };
};

export const saveUserLoginInfo: saveUserLoginInfoActionCreator = (
  userLoginInfo: IUserLoginInfo,
) => {
  return {
    type: 'SAVE_USER_LOGIN_INFO',
    userLoginInfo: userLoginInfo,
  };
};

export const saveUserInfo: saveUserInfoActionCreator = (user: IUser) => {
  return {
    type: 'SAVE_USER_INFO',
    userInfo: user,
  };
};

export const saveUserPregnancyInfo: saveUserPregnancyInfoActionCreator = (
  userPregnancyInfo: IUserPregnancyInfo,
) => {
  return {
    type: 'SAVE_USER_PREGNANCY_INFO',
    userPregnancyInfo: userPregnancyInfo,
  };
};

export const saveUserWorkoutInfo: saveUserWorkoutInfoActionCreator = (
  userWorkoutInfo: IUserWorkoutInfo,
) => {
  return {
    type: 'SAVE_USER_WORKOUT_INFO',
    userWorkoutInfo: userWorkoutInfo,
  };
};
