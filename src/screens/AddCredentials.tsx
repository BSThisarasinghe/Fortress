import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function AddCredentials({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>Add credentials</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  card: {
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    elevation: 2,
  },
  image: {width: '100%', height: 150, borderRadius: 8},
  name: {fontSize: 18, fontWeight: 'bold', marginTop: 10},
  description: {fontSize: 14, color: '#666'},
});
