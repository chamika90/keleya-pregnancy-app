import {MONTH_LIST} from '../config/constants';

export const formatDate: (date: Date) => string = function (date) {
  let formattedDate: string;
  formattedDate =
    MONTH_LIST[date.getMonth()].name +
    ' ' +
    date.getDate() +
    ' ' +
    date.getFullYear();
  return formattedDate;
};
