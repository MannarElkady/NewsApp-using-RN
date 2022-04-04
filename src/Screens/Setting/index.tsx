import {View} from 'react-native';
import React from 'react';
import ThemeSettingSection from '../../Component/ThemeSettingSection';
import styles from './style';

const Setting = () => {
  return (
    <View style={styles.settingContainer}>
      <View style={styles.themeSectionContainer}>
        <ThemeSettingSection />
      </View>
    </View>
  );
};

export default Setting;
