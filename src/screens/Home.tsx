import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const animals = [
  {
    id: '1',
    name: 'Buddy',
    description: 'Friendly dog',
    image: 'https://files.oaiusercontent.com/file-QAdBi2iHkvaWuvLLcyYV4T',
  },
  {
    id: '2',
    name: 'Whiskers',
    description: 'Playful cat',
    image: 'https://files.oaiusercontent.com/file-QAdBi2iHkvaWuvLLcyYV4T',
  },
];

export default function Home({navigation}: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={animals}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {item})}>
            <View style={styles.card}>
              <Image source={{uri: item.image}} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
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
