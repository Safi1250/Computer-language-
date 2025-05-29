import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export default function StatusBar({ language, theme }) {
  return (
    <View style={[styles.container, { backgroundColor: colors[theme].statusBarBackground }]}>
      <Text style={[styles.text, { color: colors[theme].text }]}>
        {language.toUpperCase()} | UTF-8 | LF
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderTopWidth: 1
  },
  text: {
    fontSize: 12
  }
});
