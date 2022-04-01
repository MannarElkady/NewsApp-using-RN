import {Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

export type Props = {
  tabBarItems: {name: string; icon: any}[];
  didSelectTabIndex: (index: React.SetStateAction<number>) => void;
};

const TabBar: React.FC<Props> = ({tabBarItems, didSelectTabIndex}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);

  const textBarComponent = (item: any, index: Number) => (
    <Text style={styles.tabBarItemText(selectedIndex, index)}>{item.name}</Text>
  );

  return (
    <View style={styles.tabBarContainer}>
      {tabBarItems.map((item: any, index: number) => (
        <View style={styles.tabBarItem(selectedIndex, index)}>
          <Pressable
            onPress={() => {
              setSelectedIndex(index);
              didSelectTabIndex(index);
            }}>
            {selectedIndex !== index ? (
              textBarComponent(item, index)
            ) : (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
