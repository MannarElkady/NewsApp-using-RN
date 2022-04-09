import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  LinkingOptions,
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
import usePreferredLanguage from '../Languages/usePreferredLanguage';

const Navigation = () => {
  //set up for theming and languages
  let dispatch = useAppDispatch();
  const isAutoMode = useAppSelector(state => state.themingReducer.isAutoTheme);
  const isDarkMode = useAppSelector(state => state.themingReducer.isDarkTheme);

  let autoMode = useColorScheme();
  if (isAutoMode) {
    setAppMode(dispatch, autoMode);
  }
  usePreferredLanguage(); //set preferred language

  //create navigation stack
  const MainStack = createNativeStackNavigator();
  //configure deeplinking
  const linking: LinkingOptions<any> = {
    prefixes: appPrefixes,
    config: {
      screens: {
        DetailsPage: {
          path: 'details/:itemID',
          parse: {
            itemID: (itemID: string) => `${itemID}`,
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
