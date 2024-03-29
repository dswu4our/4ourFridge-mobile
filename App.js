import 'react-native-gesture-handler';
import  React,{useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity } from 'react-native';
import LoginScreen from './screens/login.js';
import Profile from './screens/loginprofile';
import StartScreen from './screens/start.js';
import MainScreen from './screens/main.js';
import ManageScreen from './screens/manage.js';
import BasketScreen from './screens/basket.js';
import MypageScreen from './screens/mypage.js';
import SearchScreen from './screens/search.js';
import CartScreen from './screens/cart.js';
import CookScreen from './screens/cook.js';
import CookList from './screens/cooklist.js';
import HeartList from './screens/heartlist';
import Notice from './screens/notice';
import UserInfo from './screens/userinfo';
import VersionInfo  from './screens/versioninfo.js';
import Logout from './screens/logout.js';
import YoutubeList from './screens/youtubeList';
import CameraCheck from './screens/cameraCheck';
import CameraError from './screens/cameraError';
import ModalPage from './screens/modal';
import CameraCart from './screens/cameraCart.js'
import pickImageCheck from './screens/pickImageCheck.js';
import pickImageCart from './screens/pickImageCart.js';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';


import store from './screens/reducer/store'

const MainTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SettingsStack = createStackNavigator();


function MainTabScreen(props) {
  const[modalVisible,setModalVisible]=useState(false);
  const pressButton=()=>{
    setModalVisible(true);
  }
  return (
    <MainTab.Navigator
      initialRouteName="MainScreen"
      tabBarOptions={{
        activeTintColor: '#F59A23',
        inactiveTintColor: '#191919',
        style: {
          height:60,
          paddingBottom: 20,
          backgroundColor: '#FFF',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'space-around',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: -9
          },
          shadowOpacity: 0.4,
          shadowRadius: 10
        },
        indicatorStyle: {
          borderBottomColor: '#F59A23',
          borderBottomWidth: 4,
        },
        showIcon: true,
        showLabel: false
      }}
    >
      <MainTab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarLabel: '메인',
          unmountOnBlur: Platform.OS === 'ios' ? false : true,
          unmountOnBlur: true,
          tabBarIcon: ({focused }) => (
            <View>
            <Icon name='fridge-outline' size={30}
            style={{
              color:focused?'#F59A23':'#191919',
              padding:15
            }}/>
            </View>
          )
        }} />
      <MainTab.Screen
        name="ManageScreen"
        component={ManageScreen}
        options={{
          unmountOnBlur: Platform.OS === 'ios' ? false : true,
          tabBarLabel: '냉장고 관리',
          tabBarIcon: ({ focused }) => (
            <View>
            <Icon name='calendar-month-outline' size={30} 
            style={{
              color:focused?'#F59A23':'#191919',
              padding:15
            }}/>
            </View>
          )
        }} />
      <MainTab.Screen
        name="ChoiceScreen"
        component={ModalPage}
        options={{
          tabBarLabel: '모달',
          unmountOnBlur: Platform.OS === 'ios' ? false : true,
          tabBarIcon: ({focused}) => (
            <TouchableOpacity activeOpacity={0.8} onPressOut={pressButton}>
            <View>
            <Icon name='plus' size={40} style={{  
              backgroundColor:'#F59A23',
              color:'#fff',
              padding:5,
              borderRadius:100,
            }}
            />
            <ModalPage
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            />
            </View>
            </TouchableOpacity>
          )

        }}
      />
      <MainTab.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          tabBarLabel: '장바구니',
          unmountOnBlur: Platform.OS === 'ios' ? false : true,
          tabBarIcon: ({ focused }) => (
            <View>
            <Icon name='basket-outline' size={30}
             style={{
              color:focused?'#F59A23':'#191919',
              padding:15
            }}/>
            </View>
          ),
        }} />
      <MainTab.Screen
        name="MypageScreen"
        component={MypageScreen}
        options={{
          tabBarLabel: '마이페이지',
          unmountOnBlur: Platform.OS === 'ios' ? false : true,
          tabBarIcon: ({ focused }) => (
            <View>
            <Icon name='account-outline' size={30}
              style={{
                color:focused?'#F59A23':'#191919',
                padding:15
              }}/>
              </View>
          )
        }} />

    </MainTab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.SafeAreaView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login" screenOptions={{headerShown:false}}>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              title: "로그인 화면",
              unmountOnBlur: Platform.OS === 'ios' ? false : true,
            }} />
          <Stack.Screen
            name="loginprofile"
            component={Profile}
            options={{
              title: "로그인 화면"
            }} />
          <Stack.Screen
            name="start"
            component={StartScreen}
            options={{
              title: "촬영 유도 화면"
            }} />
          <Stack.Screen
            name="search"
            component={SearchScreen}
            options={{
              unmountOnBlur: true,
              title: "재료 검색 화면"
            }} />
          <Stack.Screen
            name="cart"
            component={CartScreen}
            options={{
              unmountOnBlur: true,
              title: "담은 재료",
              unmountOnBlur: Platform.OS === 'ios' ? false : true,
            }} />
          <Stack.Screen
            name="MainScreen"
            component={MainTabScreen}
            options={{
              title: "메인 화면",
              unmountOnBlur: Platform.OS === 'ios' ? false : true,
            }} />
          <Stack.Screen
            name="main"
            component={MainScreen}
            options={{
              title: "메인 화면",
              unmountOnBlur: Platform.OS === 'ios' ? false : true,
            }} />
            <Stack.Screen
            name="cook"
            component={CookScreen}
            options={{
              title: "요리 하기",
              unmountOnBlur: Platform.OS === 'ios' ? false : true,
            }} />
          <Stack.Screen
            name="youtubeList"
            component={YoutubeList}
            options={{
              title: "요리 하기"
            }} />   
          <Stack.Screen
            name="basket"
            component={BasketScreen}
            options={{
              title: "장바구니",
              unmountOnBlur: Platform.OS === 'ios' ? false : true,
            }} />     
          <Stack.Screen
            name="mypage"
            component={MypageScreen}
            options={{
              title: "마이페이지",
              unmountOnBlur: Platform.OS === 'ios' ? false : true,
            }} />  
          <Stack.Screen
            name="cooklist"
            component={CookList}
            options={{
              title: "요리내역",
              unmountOnBlur: Platform.OS === 'ios' ? false : true,
            }} /> 
          <Stack.Screen
            name="heartlist"
            component={HeartList}
            options={{
              title: "찜한 목록",
             
            }} /> 
          <Stack.Screen
            name="notice"
            component={Notice}
            options={{
              title: "공지사항"
            }} /> 
          <Stack.Screen
            name="versioninfo"
            component={VersionInfo}
            options={{
              title: "버전 정보"
            }} />
          <Stack.Screen
            name="userinfo"
            component={UserInfo}
            options={{
              title: "회원 정보",
              unmountOnBlur: Platform.OS === 'ios' ? false : true,
            }} />  
          <Stack.Screen
            name="logout"
            component={Logout}
            options={{
              title: "로그아웃"
            }} />      
          <Stack.Screen
            name="cameraCheck"
            component={CameraCheck}
            options={{
              title: "재료 인식 결과 확인"
            }} />  
          <Stack.Screen
            name="pickImageCheck"
            component={pickImageCheck}
            options={{
              title: "앨범 선택 재료 인식 결과 확인"
            }} />  
          <Stack.Screen
            name="pickImageCart"
            component={pickImageCart}
            options={{
              title: "앨범 선택 재료 인식 결과 확인"
            }} />  
          <Stack.Screen
            name="cameraCart"
            component={CameraCart}
            options={{
              title: "재료 인식 결과 확인"
            }} />  
          <Stack.Screen
            name="cameraError"
            component={CameraError}
            options={{
              title: "재료 인식 결과 실패"
            }} />  
          <Stack.Screen
            name="manage"
            component={ManageScreen}
            options={{
              title: "냉장고 관리",
              unmountOnBlur: true,
            }} />    
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
