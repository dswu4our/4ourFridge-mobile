import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';

export default function Notice () {
  return (
    <View style={{ flex: 1 , padding: 16}}>
        <Text>
          공지사항
        </Text>
    </View>
  );
}

/*
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
*/