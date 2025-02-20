import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 2000);
  }, []);
  const checkLogin = async () => {
    const id = await AsyncStorage.getItem('USERID');
    if (id !== null) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <View style={style.container}>
      <Text style={style.logo}>{'Firebase Chat\n App'}</Text>
    </View>
  );
};

export default Splash;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
});
