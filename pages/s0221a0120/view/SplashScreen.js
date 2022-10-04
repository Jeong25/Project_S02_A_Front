import React, { useEffect, useState, useMemo } from 'react';
import { Dimensions, } from 'react-native';
import { Text, View, } from 'react-native';
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = (props) => {
  const styles = styleSheet()

  useEffect(() => {
    const getLocalData = async () => {
      const permissionAgree = await AsyncStorage.getItem('permissionAgree')

      if (permissionAgree) {
        props.navigation.reset({ routes: [{ name: 'Signup' }] })
      } else {
        props.navigation.reset({ routes: [{ name: 'Access' }] })
      }
      return
    }
    getLocalData()
  }, [])

  return (
    <View style={styles.wrap}>
      <View style={styles.inner}>
        <View style={styles.titleWrap}>
          <Text style={styles.subTitle}>
            <Text style={styles.subTitleBold}>쉽고 빠른</Text> 비용처리
          </Text>
          <Text style={styles.title}>토  브</Text>
        </View>
        <View style={styles.progressBar}>
        </View>
      </View>
    </View>
  );
}

SplashScreen.propTypes = {

}

SplashScreen.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}

export default SplashScreen
