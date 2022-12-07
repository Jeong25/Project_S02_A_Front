/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Signin from './pages/s0221a0030/view/signin';
import SignUp from './pages/s0221A0140/view/signUp';
import Qrscan from './pages/s0221a0020/view/qrscan';
import Qrcode from './pages/s0221a0010/view/qrcode';
import EventList from './pages/s0221a2000/view/list';
import Cost from './pages/s0221a0060/view/Cost';
import CostModify from './pages/s0221a0061/view/CostModify';
import CostList from './pages/s0221a0070/view/CostList';
import Payment from './pages/s0221a0080/view/Payment';
import PaymentList from './pages/s0221a0090/view/PaymentList';
import Access from './pages/s0221a0110/view/Access';
import UserData from './pages/s0221a0100/view/UserData';
import DepReg from './pages/s0221A0150/view/DepReg';
import Tempo from './pages/s0221A0160/view/Tempo';
import SearchMemList from './pages/s0221A0180/view/SearchMemList';
import MemberList from './pages/s0221A0170/view/MemberList';
import SearchCode from './pages/s0221a0130/view/SearchCode';
import SplashScreen from './pages/s0221a0120/view/SplashScreen';
import RNSplashScreen from 'react-native-splash-screen';
import mobileAds from 'react-native-google-mobile-ads';


const Stack = createStackNavigator();
const App = () => {

  useEffect(() => {
    RNSplashScreen.hide();
  }, []);

  mobileAds()
    .initialize()
    .then(adapterStatuses => {
      // Initialization complete!
    });

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
        />
        <Stack.Screen
          name="Qrscan"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Qrscan}
        />
        <Stack.Screen
          name="QrCode"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Qrcode}
        />
        <Stack.Screen
          name="EventList"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={EventList}
        />
        <Stack.Screen
          name="Cost"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Cost}
        />
        <Stack.Screen
          name="CostModify"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={CostModify}
        />
        <Stack.Screen
          name="CostList"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={CostList}
        />
        <Stack.Screen
          name="Payment"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Payment}
        />
        <Stack.Screen
          name="PaymentList"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={PaymentList}
        />
        <Stack.Screen
          name="DepReg"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={DepReg}
        />
        <Stack.Screen
          name="Tempo"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Tempo}
        />
        <Stack.Screen
          name="SearchMemList"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={SearchMemList}
        />
        <Stack.Screen
          name="MemberList"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={MemberList}
        />
        <Stack.Screen
          name="SearchCode"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={SearchCode}
        />
        <Stack.Screen
          name="UserData"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={UserData}
        />
        <Stack.Screen
          name="Access"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Access}
        />
        <Stack.Screen
          name="Splash"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
