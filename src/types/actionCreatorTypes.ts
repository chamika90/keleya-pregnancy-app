import {
  getUserInfoAction,
  saveUserInfoAction,
  saveUserLoginInfoAction,
  saveUserPregnancyInfoAction,
  saveUserWorkoutInfoAction,
  getUserLoginInfoAction,
} from './actionsTypes';
import {
  IUserLoginInfo,
  IUser,
  IUserPregnancyInfo,
  IUserWorkoutInfo,
} from './storeTypes';

export type getUserInfoActionCreator = () => getUserInfoAction;
export type getUserLoginInfoActionCreator = () => getUserLoginInfoAction;

export type saveUserLoginInfoActionCreator = (
  userLoginInfo: IUserLoginInfo,
) => saveUserLoginInfoAction;
export type saveUserInfoActionCreator = (userInfo: IUser) => saveUserInfoAction;
export type saveUserPregnancyInfoActionCreator = (
  userPregnancyInfo: IUserPregnancyInfo,
) => saveUserPregnancyInfoAction;
export type saveUserWorkoutInfoActionCreator = (
  userWorkoutInfo: IUserWorkoutInfo,
) => saveUserWorkoutInfoAction;
