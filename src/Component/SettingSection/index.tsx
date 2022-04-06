import {Switch, Text, View} from 'react-native';
import React from 'react';
import style from './style';
import {useAppSelector} from '../../Redux/store';

interface Props {
  themeTitleSetting: string;
  autoToggleText: string;
  isAutoForSettingSection: boolean;
  toggleIsAuto: (value: boolean) => void;
  optionToggleText: string;
  isOptionEnabled: boolean;
  toggleIsOption: (value: boolean) => void;
}
const SettingSection = ({
  themeTitleSetting,
  autoToggleText,
  isAutoForSettingSection,
  toggleIsAuto,
  optionToggleText,
  isOptionEnabled,
  toggleIsOption,
}: Props) => {
  const isDarkMode = useAppSelector(state => state.themingReducer.isDarkTheme);
  return (
    <View
      style={isDarkMode ? style.settingContainerDark : style.settingContainer}>
      <Text style={style.textHeaderStyle}>{themeTitleSetting}</Text>
      <View style={style.toggleOption}>
        <Text style={style.textStyle}>{autoToggleText}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isAutoForSettingSection ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleIsAuto}
          value={isAutoForSettingSection}
        />
      </View>
      <View style={style.toggleOption}>
        <Text style={style.textStyle}>{optionToggleText}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isOptionEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleIsOption}
          value={isOptionEnabled}
        />
      </View>
    </View>
  );
};

export default SettingSection;
