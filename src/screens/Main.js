import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Users from '../tabs/Users';
import Setting from '../tabs/Setting';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={style.container}>
      {selectedTab == 0 ? <Users /> : <Setting />}
      <View style={style.bottomTab}>
        <TouchableOpacity
          style={style.tab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../assets/user.png')}
            style={[
              style.tabIcon,
              {tintColor: selectedTab == 0 ? 'white' : '#A09F9F'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.tab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../assets/setting.png')}
            style={[
              style.tabIcon,
              {tintColor: selectedTab == 1 ? 'white' : '#A09F9F'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tab: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 35,
    height: 35,
  },
});
