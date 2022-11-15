import React, { useEffect, useMemo, useState, Fragment } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import Footer from '../../common/footer/Footer';


const DepReg = (props) => {

  DepReg.defaultProps = {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height
  }

  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])


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
            <Text style={styles.title}>부서등록</Text>
            <View style={styles.regBtnWrap}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Tempo')}>
                <ReactImage source={require('../../common/img/registIcon.png')} style={styles.registIcon} />
              </TouchableOpacity>
            </View>

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

              <View style={styles.level1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('MemberList')}>
                  <View style={styles.titleWrap}>
                    <Text style={styles.cellTitle}>개발 1부</Text>
                    <TouchableOpacity style={styles.plusIcon}>
                      <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.memberNumber}>
                    <ReactImage source={require('../../common/img/member.png')} style={styles.memberIcon} /> 14명
                  </Text>
                  <View style={styles.dropDownBtn}>
                    <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                  </View>
                </TouchableOpacity>


                <View style={styles.level2Wrap}>

                  <View style={styles.level2}>
                    <Text style={styles.cellTitle}>행사1</Text>
                    <View style={styles.numberWrap}>
                      <Text style={styles.eventDate}>
                        2022-01-01 ~ 2022-01-01
                      </Text>
                    </View>
                  </View>

                  <View style={styles.divider} />


                  <View style={styles.level2}>
                    <Text style={styles.cellTitle}>행사2</Text>
                    <View style={styles.numberWrap}>
                      <Text style={styles.eventDate}>
                        2022-01-01 ~ 2022-01-01
                      </Text>

                    </View>
                  </View>

                  <View style={styles.divider} />


                  <View style={styles.level2}>
                    <Text style={styles.cellTitle}>부서1</Text>
                    <Text style={styles.memberNumber}>
                      <ReactImage source={require('../../common/img/member.png')} style={styles.memberIcon} /> 14명
                    </Text>

                  </View>
                  <View style={styles.divider} />

                  <View style={styles.level3Wrap}>
                    <View style={styles.level3}>
                      <Text style={styles.cellTitle}>행사3</Text>
                      <View style={styles.numberWrap}>
                        <Text style={styles.eventDate}>
                          2022-01-01 ~ 2022-01-01
                        </Text>

                      </View>
                    </View>
                    <View style={styles.divider} />


                  </View>
                </View>
              </View>
              <View style={styles.divider} />

              <View style={styles.level1}>
                <View style={styles.titleWrap}>
                  <Text style={styles.cellTitle}>개발 1부</Text>
                  <View style={styles.plusIcon}>
                    <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                  </View>
                </View>

                <Text style={styles.memberNumber}>
                  <ReactImage source={require('../../common/img/member.png')} style={styles.memberIcon} /> 14명
                </Text>
                <View style={styles.dropDownBtn}>
                  <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                </View>

              </View>
              <View style={styles.divider} />

              <View style={styles.level1}>
                <View style={styles.titleWrap}>
                  <Text style={styles.cellTitle}>개발 2부</Text>
                  <View style={styles.plusIcon}>
                    <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                  </View>
                </View>

                <Text style={styles.memberNumber}>
                  <ReactImage source={require('../../common/img/member.png')} style={styles.memberIcon} /> 14명
                </Text>
                <View style={styles.dropDownBtn}>
                  <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                </View>

              </View>
              <View style={styles.divider} />

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


