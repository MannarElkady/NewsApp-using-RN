import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../Component/TabNavigator';
import {appPrefixes, NavigationScreens} from '../Types';
import NewsDetails from '../Component/NewsDetails';
import {ActivityIndicator} from 'react-native';

const Navigation = () => {
  const MainStack = createNativeStackNavigator();
  const linking = {
    prefixes: appPrefixes,
    config: {
      screens: {
        DetailsPage: {
          path: 'details/:itemID',
          parse: {
            itemID: itemID => `${itemID}`,
          },
        },
      },
    },
  };

  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
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
