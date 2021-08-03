import React from 'react';
import { StyleSheet, Text, TextComponent, View, Image, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import ManageTab from './manageTab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ManageScreen(props) {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View>
        <View style={styles.titleArea}>
          <View >
            <Text style={styles.text}>냉장고 관리</Text>
          </View>
          <View style={styles.alert}>
            <Icon name="alert-circle" size={20} color="#DC143C" />
            <Text style={styles.text2}> 유통기한이 3일 이내로 끝나는 재료들이에요!</Text>
          </View>
        </View>
      </View>
      <ManageTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  titleArea: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop:20,
    marginLeft:20,
    marginBottom:10
  },
  alert: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000'
  },
  text2: {
    color: '#797979',
    marginLeft: 5,
    marginBottom: 2,
    fontSize: 12,
  },
});
