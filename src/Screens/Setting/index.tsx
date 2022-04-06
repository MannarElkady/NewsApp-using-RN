import {Text, View} from 'react-native';
import React from 'react';
import ThemeSettingSection from '../../Component/ThemeSettingSection';
import styles from './style';
import LanguageSettingSection from '../../Component/LanguageSettingSection';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../../Redux/store';

const Setting = () => {
  const {t} = useTranslation();
  const isDarkMode = useAppSelector(state => state.themingReducer.isDarkTheme);
  return (
    <View style={styles.settingContainer}>
      <Text style={isDarkMode ? styles.darkTextStyle : styles.textStyle}>
        {t('settingTabItem')}
      </Text>
      <View style={styles.themeSectionContainer}>
        <ThemeSettingSection />
      </View>
      <View style={styles.themeSectionContainer}>
        <LanguageSettingSection />
      </View>
    </View>
  );
};

export default Setting;
