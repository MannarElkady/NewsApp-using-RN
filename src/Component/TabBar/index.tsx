import {Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

export type Props = {
  tabBarItems: string[];
  didSelectTabIndex: (index: React.SetStateAction<number>) => void;
};

const TabBar: React.FC<Props> = ({tabBarItems, didSelectTabIndex}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);

  return (
    <View style={styles.tabBarContainer}>
      {tabBarItems.map((item: any, index: number) => (
        <View style={styles.tabBarItem(selectedIndex, index)}>
          <Pressable
            onPress={() => {
              setSelectedIndex(index);
              didSelectTabIndex(index);
            }}>
            <Text style={styles.tabBarItemText(selectedIndex, index)}>
              {item}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default TabBar;
