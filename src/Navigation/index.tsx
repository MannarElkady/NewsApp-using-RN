import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../Component/TabNavigator';
import {appPrefixes, NavigationScreens} from '../Constants';
import NewsDetails from '../Component/NewsDetails';
import {ActivityIndicator} from 'react-native';
import {useAppDispatch, useAppSelector} from '../Redux/store';
import useColorScheme from '../Theming/useColorSchema';
import {setAppMode} from '../Theming';

const Navigation = () => {
  let dispatch = useAppDispatch();
  const isAutoMode = useAppSelector(state => state.themingReducer.isAutoTheme);
  const isDarkMode = useAppSelector(state => state.themingReducer.isDarkTheme);

  let autoMode = useColorScheme();
  if (isAutoMode) {
    setAppMode(dispatch, autoMode);
  }

  const MainStack = createNativeStackNavigator();
  const linking = {
    prefixes: appPrefixes,
    config: {
      screens: {
        DetailsPage: {
          path: 'details/:itemID',
          parse: {
            itemID: (itemID: Number) => `${itemID}`,
          },
        },
      },
    },
  };

  return (
    <NavigationContainer
      theme={isDarkMode ? DarkTheme : DefaultTheme}
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
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? 'grey' : 'white', //Set Header color
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
