import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

const themes = [
  { label: 'Dark', value: 'dark' },
  { label: 'Light', value: 'light' },
  { label: 'Solarized', value: 'solarized' },
  { label: 'Monokai', value: 'monokai' }
];

export default function ThemeSelector({ theme, setTheme }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors[theme].text }]}>Theme:</Text>
      <Picker
        selectedValue={theme}
        style={[styles.picker, { color: colors[theme].text }]}
        onValueChange={(itemValue) => setTheme(itemValue)}
        dropdownIconColor={colors[theme].text}
      >
        {themes.map((th) => (
          <Picker.Item key={th.value} label={th.label} value={th.value} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginRight: 8,
    fontSize: 14
  },
  picker: {
    height: 40,
    width: 120
  }
});
