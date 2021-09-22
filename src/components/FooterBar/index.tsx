import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  gradientColors: string[];
}

/*
 * Footer Bar
 */
const FooterBar: React.FC<Props> = ({gradientColors}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={gradientColors}
        style={styles.bar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '30%',
    height: 5,
  },
  bar: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default FooterBar;
