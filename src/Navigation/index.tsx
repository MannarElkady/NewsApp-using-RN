import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsDetails from '../Component/NewsDetails';
import TabNavigator from '../Component/TabNavigator';
import {NavigationScreens} from '../Types';

const Navigation = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name={NavigationScreens.TabNavigator}
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name={NavigationScreens.detailsPage}
          component={NewsDetails}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
