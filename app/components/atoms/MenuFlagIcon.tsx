import React from 'react';
import { Image, StyleSheet, ImageStyle } from 'react-native';

type MenuFlagIconProps = {
  flagUrl: string;
};

const MenuFlagIcon = React.memo(function MenuFlagIcon({ flagUrl }: MenuFlagIconProps) {
  return <Image style={styles.menuFlag} source={{ uri: flagUrl }} />;
});

const styles = StyleSheet.create({
  menuFlag: {
    width: 30,
    height: 20,
  } as ImageStyle,
});

export default MenuFlagIcon;
