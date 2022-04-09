import React from 'react';
import {useTranslation} from 'react-i18next';
import {shouldUpdateStateWithInAppLanguageSelection} from '../../Languages/usePreferredLanguage';
import {setIsAuto} from '../../Redux/Slicers/LanguageReducer';
import {useAppDispatch, useAppSelector} from '../../Redux/store';
import SettingSection from '../SettingSection';

const LanguageSettingSection = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  let currentLanguage = useAppSelector(state => state.languageReducer.language);
  let isAutoMode = useAppSelector(state => state.languageReducer.isAuto);
  const didChangeLanguage = (isEnglish: boolean) => {
    shouldUpdateStateWithInAppLanguageSelection(dispatch, isEnglish);
  };

  const didSelectAutoMode = (isAuto: boolean) => {
    dispatch(setIsAuto(isAuto));
  };

  return (
    <SettingSection
      themeTitleSetting={t('languageSettingTitle')}
      autoToggleText={t('autoLanguageToggle')}
      isAutoForSettingSection={isAutoMode}
      toggleIsAuto={didSelectAutoMode}
      optionToggleText={t('languageModeToggle')}
      isOptionEnabled={currentLanguage === 'en'}
      toggleIsOption={didChangeLanguage}
    />
  );
};

export default LanguageSettingSection;
