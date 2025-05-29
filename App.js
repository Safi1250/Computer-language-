import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Editor from './components/Editor';
import FileExplorer from './components/FileExplorer';
import StatusBar from './components/StatusBar';
import LanguageSelector from './components/LanguageSelector';
import ThemeSelector from './components/ThemeSelector';
import { colors } from './styles/colors';

export default function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('dark');
  const [files, setFiles] = useState([
    { name: 'index.html', type: 'file' },
    { name: 'styles.css', type: 'file' },
    { name: 'app.js', type: 'file' },
    { name: 'components', type: 'folder' }
  ]);

  return (
    <View style={[styles.container, { backgroundColor: colors[theme].background }]}>
      <FileExplorer files={files} theme={theme} />
      <View style={styles.editorContainer}>
        <View style={styles.toolbar}>
          <LanguageSelector 
            language={language} 
            setLanguage={setLanguage}
            theme={theme}
          />
          <ThemeSelector 
            theme={theme} 
            setTheme={setTheme}
          />
        </View>
        <Editor 
          code={code} 
          setCode={setCode}
          language={language}
          theme={theme}
        />
        <StatusBar 
          language={language}
          theme={theme}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  editorContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1
  }
});
