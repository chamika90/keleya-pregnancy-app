import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import {theme} from '../../config/theme';

const {colors} = theme;

export const InputTypes = {
  email: 'EMAIL',
  password: 'PASSWORD',
};

const InputTypeProps = {
  [InputTypes.email]: {
    secureText: false,
  },
  [InputTypes.password]: {
    secureText: true,
  },
};

interface Props {
  placeholder: string;
  inputType: string;
  onTextChange: (string) => void;
}

/*
 * Custom Input
 */
const CustomInput: React.FC<Props> = ({
  placeholder,
  inputType,
  onTextChange,
}) => {
  const [isSecureText, setTextVisibility] = useState(
    InputTypeProps[inputType].secureText,
  );

  const toggleVisibility = () => {
    setTextVisibility(!isSecureText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecureText}
        style={styles.input}
        onChangeText={text => onTextChange(text)}
      />
      {InputTypeProps[inputType].secureText && (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => {
            toggleVisibility();
          }}>
          <Icon
            name={isSecureText ? 'eye' : 'eye-slash'}
            size={16}
            color={colors.primaryIconTintColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
