import {View} from 'react-native';
import React from 'react';
import ThemeSettingSection from '../../Component/ThemeSettingSection';
import styles from './style';
import LanguageSettingSection from '../../Component/LanguageSettingSection';

const Setting = () => {
  return (
    <View style={styles.settingContainer}>
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
