import {Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

export type Props = {
  tabBarItems: {name: string; icon: any}[];
  didSelectTabIndex: (index: React.SetStateAction<number>) => void;
  darkMode: boolean;
};

const TabBar: React.FC<Props> = ({
  tabBarItems,
  didSelectTabIndex,
  darkMode,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const textBarComponent = (item: any, index: Number) => (
    <Text style={styles.tabBarItemText(selectedIndex, index, darkMode)}>
      {item.name}
    </Text>
  );

  return (
    <View
      style={darkMode ? styles.darkTabBarContainer : styles.tabBarContainer}>
      {tabBarItems.map((item: any, index: number) => (
        <View
          key={index}
          style={styles.tabBarItem(selectedIndex, index, darkMode)}>
          <Pressable
            onPress={() => {
              setSelectedIndex(index);
              didSelectTabIndex(index);
            }}>
            {selectedIndex !== index ? (
              textBarComponent(item, index)
            ) : (
              <View style={styles.selectedTabBar}>
                <Image source={item.icon} style={styles.tabBarIcon} />
                {textBarComponent(item, index)}
              </View>
            )}
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default TabBar;
