import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Button({ text }: ButtonProps) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    maxWidth: 200
  },
  text:{
    color: 'orange'
  }
});
