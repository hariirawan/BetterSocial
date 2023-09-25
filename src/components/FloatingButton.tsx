import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import IconEdit from '../assets/icons/edit.png';
import Colors from '../helpers/Colors';

export default function floatinButton() {
  return (
    <View style={styles.floatinButton}>
      <Image source={IconEdit} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  floatinButton: {
    height: 50,
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 62,
    right: 20,
  },
  icon: {
    width: 19,
    height: 19,
  },
});
