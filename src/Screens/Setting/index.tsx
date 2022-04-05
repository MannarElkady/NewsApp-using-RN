import {Switch, Text, View} from 'react-native';
import React from 'react';
import ThemeSettingSection from '../../Component/ThemeSettingSection';
import styles from './style';
import {useAppDispatch, useAppSelector} from '../../Redux/store';
import {setIsAuto, setLanguage} from '../../Redux/Slicers/LanguageReducer';
import {useTranslation} from 'react-i18next';

const Setting = () => {
  const {t} = useTranslation();
  let currentLanguage = useAppSelector(state => state.languageReducer.language);
  let isAutoMode = useAppSelector(state => state.languageReducer.isAuto);
  let dispatch = useAppDispatch();
  const didChangeLanguage = (isEnglish: boolean) => {
    dispatch(setIsAuto(false));
    dispatch(setLanguage(isEnglish ? 'en' : 'ar'));
  };

  const didSelectAutoMode = (isAuto: boolean) => {
    dispatch(setIsAuto(isAuto));
  };
  return (
    <View style={styles.settingContainer}>
      <View style={styles.themeSectionContainer}>
        <ThemeSettingSection />
      </View>
      <View style={styles.languageSectionContaienr}>
        <Text style={styles.textStyle}>
          {t('languageSettingTitle')} {currentLanguage}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={currentLanguage === 'en' ? 'green' : 'red'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={didChangeLanguage}
          value={currentLanguage === 'en'}
        />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isAutoMode ? 'green' : 'red'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={didSelectAutoMode}
          value={isAutoMode}
        />
      </View>
    </View>
  );
};

export default Setting;
