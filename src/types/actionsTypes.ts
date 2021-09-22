import {
  IUserLoginInfo,
  IUser,
  IUserPregnancyInfo,
  IUserWorkoutInfo,
} from './storeTypes';

export interface getUserInfoAction {
  type: 'GET_USER_INFO';
}

export interface getUserLoginInfoAction {
  type: 'GET_USER_LOGIN_INFO';
}

export interface saveUserLoginInfoAction {
  type: 'SAVE_USER_LOGIN_INFO';
  userLoginInfo: IUserLoginInfo;
}

export interface saveUserInfoAction {
  type: 'SAVE_USER_INFO';
  userInfo: IUser;
}

export interface saveUserPregnancyInfoAction {
  type: 'SAVE_USER_PREGNANCY_INFO';
  userPregnancyInfo: IUserPregnancyInfo;
}

export interface saveUserWorkoutInfoAction {
  type: 'SAVE_USER_WORKOUT_INFO';
  userWorkoutInfo: IUserWorkoutInfo;
}
