import React from 'react';
import {Text} from 'react-native';
import {typography} from '../../config/typography';

interface ErrorMessageViewProps {
  message: string;
}

const ErrorMessageView: React.FC<ErrorMessageViewProps> = ({message}) => {
  return <Text style={[typography.inputErrorMessage]}>{message}</Text>;
};

export default ErrorMessageView;
