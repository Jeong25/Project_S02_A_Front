import React, { useEffect, useMemo, useState, Fragment } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import Footer from '../../common/footer/Footer';


const MemberList = (props) => {

  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
        <View style={styles.wrap}>

          <View style={styles.topMenu}>
            <View style={styles.backBtn}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <ReactImage source={require('../../common/img/backBtnIcon-w.png')} style={styles.backBtnIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>사용자 정보</Text>

          </View>
          <ScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            enableOnAndroid={true}
            scrollEnabled={true}
            scrollToOverflowEnabled={true}
            enableAutomaticScroll={true}
            keyboardShouldPersistTaps='always'
            nestedScrollEnabled={true}
          >


            <View style={styles.contentsWrap}>
              <TouchableOpacity>
                <View style={styles.cell} >
                  <View style={styles.cellInner}>
                    <Text style={styles.memberName}>황어진</Text>
                    <Text style={styles.memberDetail}>
                      010-9151-8714 / 사원
                    </Text>
                    <Text style={styles.checkWrap}>
                      <View style={styles.checkBox}>
                        {/* <ReactImage source={require('../../common/img/check.png')} style={styles.checkIcon} /> */}
                        <Switch
                          style={styles.verticalSwitch}
                          trackColor={{ false: '#333', true: '#f15a24' }}
                          thumbColor={isEnabled ? 'white' : 'white'}
                          ios_backgroundColor="#333"
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                        />
                      </View>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.divider} />

            </View>
          </ScrollView>

          <TouchableOpacity style={styles.btnWrap}>
            <View style={styles.requestBtn}>
              <Text style={styles.btnText}>저장</Text>
            </View>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
      {/* <Footer
        navigation={props.navigation}
      /> */}
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
    </Fragment >

  );
}

export default MemberList

MemberList.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
