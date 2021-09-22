import {Reducer} from 'redux';

import {IUserLoginInfo} from '../../types/storeTypes';
import {
  getUserInfoAction,
  saveUserLoginInfoAction,
} from '../../types/actionsTypes';

const initialState: IUserLoginInfo = {
  email: undefined,
  password: undefined,
};

const userLoginReducer: Reducer<
  IUserLoginInfo,
  getUserInfoAction | saveUserLoginInfoAction
> = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_LOGIN_INFO':
      return {
        email: action.userLoginInfo.email,
        password: action.userLoginInfo.password,
      };

    default:
      return {...state};
  }
};

export default userLoginReducer;
