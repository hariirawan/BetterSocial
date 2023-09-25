import {View, Text} from 'react-native';
import React from 'react';
import Colors from '../helpers/Colors';

export default function Separator() {
  return (
    <View
      style={{
        height: 4,
        width: '100%',
        backgroundColor: Colors.lightGray,
      }}
    />
  );
}
