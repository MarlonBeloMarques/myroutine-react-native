import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../constants';
import Block from './Block';

const Button = ({
  style,
  opacity,
  color,
  shadow,
  children,
  onPress,
  nameIcon,
  renderIcon,
  colorBackgroundIcon,
  colorIcon,
}) => {
  const buttonStyles = [
    styles.button,
    shadow && styles.shadow, // shadow for IOS, elevation for android
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style,
  ];

  const icon = () => {
    return (
      <Block
        flex={false}
        width={theme.sizes.base * 3}
        height={theme.sizes.base * 3}
        fullBorder
        color={colorBackgroundIcon}
        center
        middle
      >
        <AntDesign name={nameIcon} size={18} color={colorIcon} />
      </Block>
    );
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      onPress={onPress}
    >
      {children}
      {renderIcon && icon()}
    </TouchableOpacity>
  );
};

export default Button;

Button.defaultProps = {
  opacity: 0.8,
  renderIcon: true,
  colorBackgroundIcon: theme.colors.white,
  colorIcon: theme.colors.black,
  nameIcon: 'arrowright'
};

const styles = StyleSheet.create({
  button: {
    height: theme.sizes.base * 3,
    alignItems: 'center',
    marginVertical: theme.sizes.padding / 3,
    marginTop: theme.sizes.base / 2,
    backgroundColor: theme.colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shadow: {
    shadowColor: theme.colors.tertiary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 10,
    shadowRadius: 1,
    elevation: 3, // for android devices
  },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  white: { backgroundColor: theme.colors.white },
  gray: { backgroundColor: theme.colors.gray },
  black: { backgroundColor: theme.colors.black },
});