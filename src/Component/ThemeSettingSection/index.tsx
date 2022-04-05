import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Switch} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../Redux/store';
import {handleAutoMode, handleInAppMode} from '../../Theming';
import styles from './style';

const ThemeSettingSection = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(state => state.themingReducer.isDarkTheme);
  const isAutoMode = useAppSelector(state => state.themingReducer.isAutoTheme);

  const toggleIsAuto = (value: boolean) => {
    handleAutoMode(dispatch, value);
  };

  const toggleIsDarkMode = (value: boolean) => {
    handleInAppMode(dispatch, value);
  };
  return (
    <View style={styles.settingContainer}>
      <Text style={styles.textHeaderStyle}>{t('themeSettingTitle')}</Text>
      <View style={styles.toggleOption}>
        <Text style={styles.textStyle}>{t('autoThemeingToggle')}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isAutoMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleIsAuto}
          value={isAutoMode}
        />
      </View>
      <View style={styles.toggleOption}>
        <Text style={styles.textStyle}>{t('darkModeToggle')}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleIsDarkMode}
          value={isDarkMode}
        />
      </View>
    </View>
  );
};

export default ThemeSettingSection;
