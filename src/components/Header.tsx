import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import CustomText from './CustomText.tsx';

interface HeaderProps {
  title: string;
  onProfilePress: () => void;
}

const Header: React.FC<HeaderProps> = ({title, onProfilePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.spacer} />
      <CustomText variant={'bold'} style={styles.title}>
        {title}
      </CustomText>
      <TouchableOpacity onPress={onProfilePress} style={styles.iconButton}>
        <FontAwesomeIcon icon={faUser} size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1E1E1E',
    paddingLeft: 25,
    paddingRight: 25,
  },
  spacer: {
    flex: 1, // Pushes title to the center
  },
  title: {
    flex: 2, // Centers the title
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  iconButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export {Header};
