import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsDetails from '../Component/NewsDetails';

const Navigation = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Details Page" component={NewsDetails} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
