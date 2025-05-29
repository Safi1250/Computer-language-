import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { highlightSyntax } from '../utils/syntaxHighlighter';
import { colors } from '../styles/colors';

export default function Editor({ code, setCode, language, theme }) {
  const handleCodeChange = (text) => {
    setCode(text);
  };

  return (
    <TextInput
      style={[
        styles.editor, 
        { 
          color: colors[theme].text,
          backgroundColor: colors[theme].editorBackground
        }
      ]}
      multiline
      value={code}
      onChangeText={handleCodeChange}
      autoCorrect={false}
      autoCapitalize="none"
      keyboardType="default"
      textAlignVertical="top"
      dataDetectorTypes="none"
    />
  );
}

const styles = StyleSheet.create({
  editor: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    fontFamily: 'monospace'
  }
});
