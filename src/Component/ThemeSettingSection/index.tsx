import React from 'react';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '../../Redux/store';
import {handleAutoMode, handleInAppMode} from '../../Theming';
import SettingSection from '../SettingSection';

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
    <SettingSection
      themeTitleSetting={t('themeSettingTitle')}
      autoToggleText={t('autoThemeingToggle')}
      isAutoForSettingSection={isAutoMode}
      toggleIsAuto={toggleIsAuto}
      optionToggleText={t('darkModeToggle')}
      isOptionEnabled={isDarkMode}
      toggleIsOption={toggleIsDarkMode}
    />
  );
};

export default ThemeSettingSection;
