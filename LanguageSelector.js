import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

const languages = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'Java', value: 'java' },
  { label: 'Kotlin', value: 'kotlin' },
  { label: 'React JSX', value: 'jsx' },
  { label: 'Python', value: 'python' },
  { label: 'PHP', value: 'php' },
  { label: 'C++', value: 'cpp' }
];

export default function LanguageSelector({ language, setLanguage, theme }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors[theme].text }]}>Language:</Text>
      <Picker
        selectedValue={language}
        style={[styles.picker, { color: colors[theme].text }]}
        onValueChange={(itemValue) => setLanguage(itemValue)}
        dropdownIconColor={colors[theme].text}
      >
        {languages.map((lang) => (
          <Picker.Item key={lang.value} label={lang.label} value={lang.value} />
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
    width: 150
  }
});
