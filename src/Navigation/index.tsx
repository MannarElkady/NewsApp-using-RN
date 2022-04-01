import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsDetails from '../Component/NewsDetails';
import TabNavigator from '../Component/TabNavigator';

const Navigation = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <MainStack.Screen name="DetailsPage" component={NewsDetails} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
