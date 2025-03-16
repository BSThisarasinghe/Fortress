import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faEye,
  faEyeSlash,
  faLock,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const { width } = Dimensions.get('window');

const passwords = [
  { id: '1', name: 'Google', masked: true, strength: 5 },
  { id: '2', name: 'Facebook', masked: true, strength: 4 },
  { id: '3', name: 'Github', masked: true, strength: 3 },
  { id: '4', name: 'Twitter', masked: true, strength: 4 },
  { id: '5', name: 'Instagram', masked: true, strength: 5 },
];

export default function Home() {
  const [data, setData] = useState(passwords);

  const toggleMask = (id: string) => {
    setData(prevData =>
        prevData.map(item =>
            item.id === id ? { ...item, masked: !item.masked } : item
        )
    );
  };

  const renderItem = ({ item }: { item: typeof passwords[0] }) => (
      <LinearGradient
          colors={['#2e2e2e', '#151c36']}
          style={styles.passwordContainer}>
        <View style={styles.passwordLeft}>
          <FontAwesomeIcon icon={faLock} size={20} color="#fff" />
          <Text style={styles.passwordText}>{item.name}</Text>
        </View>
        <View style={styles.passwordRight}>
          {[...Array(item.strength)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} size={12} color="#FFD700" />
          ))}
          <TouchableOpacity onPress={() => toggleMask(item.id)}>
            <FontAwesomeIcon
                icon={item.masked ? faEyeSlash : faEye}
                size={20}
                color="#fff"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
  );

  return (
      <LinearGradient colors={['#000', '#151c36']} style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.countText}>Passwords</Text>
          <Text style={styles.countNumber}>{data.length}</Text>
        </View>

        {/* Lock Icon */}
        <View style={styles.lockIconContainer}>
          <Image source={require('../assets/images/lock.png')} style={{ width: 100, height: 100 }} />
        </View>

        {/* Password List */}
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
        />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#000',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  countText: {
    fontSize: 18,
    color: '#fff',
  },
  countNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  lockIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  passwordLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  passwordRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
