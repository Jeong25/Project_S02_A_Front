import React, { useEffect, useMemo, useState, Fragment } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import Footer from '../../common/footer/Footer';


const DepReg = (props) => {

  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])


  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
        <View style={styles.wrap}>
          <ScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            enableOnAndroid={true}
            scrollEnabled={true}
            scrollToOverflowEnabled={true}
            enableAutomaticScroll={true}
            keyboardShouldPersistTaps='always'
            nestedScrollEnabled={true}
          >
            <View style={styles.topMenu}>
              <View style={styles.backBtn}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <ReactImage source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>부서등록</Text>




            </View>

          </ScrollView>

        </View>
      </SafeAreaView>
      <Footer
        navigation={props.navigation}
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
    </Fragment >

  );
}

export default DepReg

DepReg.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
