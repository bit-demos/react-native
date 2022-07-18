import React from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import './ant-icon.css';

export type AntIconProps = {
  /**
   * a text to be rendered in the component.
   */
  name?: string;
  size?: number;
  color?: string;
};

export function AntIcon({ name = 'instagram', size=23, color='#ff0000' }: AntIconProps) {
  return <AntDesign name={name} size={size} color={color} />;
}

const styles = StyleSheet.create({
  text: {},
});
