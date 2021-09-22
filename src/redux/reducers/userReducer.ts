import {Reducer} from 'redux';

import {IUser} from '../../types/storeTypes';
import {
  saveUserInfoAction,
  saveUserPregnancyInfoAction,
  saveUserWorkoutInfoAction,
} from '../../types/actionsTypes';

const initialState: IUser = {
  name: undefined,
  dueDate: undefined,
  workoutPlan: undefined,
};

const userReducer: Reducer<
  IUser,
  saveUserInfoAction | saveUserPregnancyInfoAction | saveUserWorkoutInfoAction
> = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return {
        ...state,
        name: action.userInfo.name,
      };

    case 'SAVE_USER_PREGNANCY_INFO':
      return {
        ...state,
        dueDate: action.userPregnancyInfo.dueDate,
      };

    case 'SAVE_USER_WORKOUT_INFO':
      return {
        ...state,
        workoutPlan: action.userWorkoutInfo.workoutPlan,
      };

    default:
      return {...state};
  }
};

export default userReducer;
