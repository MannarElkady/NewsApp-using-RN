import {Switch, Text, View} from 'react-native';
import React from 'react';
import ThemeSettingSection from '../../Component/ThemeSettingSection';
import styles from './style';
import {useAppDispatch, useAppSelector} from '../../Redux/store';
import {setLanguage} from '../../Redux/Slicers/LanguageReducer';
import {useTranslation} from 'react-i18next';

const Setting = () => {
  const {t} = useTranslation();
  let currentLanguage = useAppSelector(state => state.languageReducer.language);
  let dispatch = useAppDispatch();
  const didChangeLanguage = (isEnglish: boolean) => {
    dispatch(setLanguage(isEnglish ? 'en' : 'ar'));
  };

  return (
    <View style={styles.settingContainer}>
      <View style={styles.themeSectionContainer}>
        <ThemeSettingSection />
      </View>
      <View style={styles.languageSectionContaienr}>
        <Text style={styles.textStyle}>
          {' '}
          {t('languageSettingTitle')} {currentLanguage}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={currentLanguage === 'en' ? 'green' : 'red'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={didChangeLanguage}
          value={currentLanguage === 'en'}
        />
      </View>
    </View>
  );
};

export default Setting;
