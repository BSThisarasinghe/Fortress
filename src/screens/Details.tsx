import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Detail({ route }: any) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Contact Owner" onPress={() => {}} color="#6C63FF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  image: { width: '100%', height: 300, borderRadius: 8, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});
