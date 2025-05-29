import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export default function FileExplorer({ files, theme }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.fileItem}>
      <Text style={[styles.fileText, { color: colors[theme].text }]}>
        {item.type === 'folder' ? '📁 ' : '📄 '}
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors[theme].sidebarBackground }]}>
      <Text style={[styles.title, { color: colors[theme].text }]}>Files</Text>
      <FlatList
        data={files}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  fileItem: {
    padding: 8
  },
  fileText: {
    fontSize: 14
  }
});
