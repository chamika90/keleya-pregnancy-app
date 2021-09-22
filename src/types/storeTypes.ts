export interface IUserInfo {
  loginInfo: IUserLoginInfo | undefined;
  user: IUser | undefined;
  userPregnancyInfo: IUserPregnancyInfo | undefined;
  //userWorkoutPlanInfo: IUserWorkoutPlanInfo | undefined;
}

export interface IUserLoginInfo {
  email: string | undefined;
  password: string | undefined;
}

export interface IUser {
  name: string | undefined;
  dueDate: Date | undefined;
  workoutPlan: string | undefined;
}

export interface IUserPregnancyInfo {
  dueDate: Date | undefined;
}

export interface IUserWorkoutInfo {
  workoutPlan: string | undefined;
}
