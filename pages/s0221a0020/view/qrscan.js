import React, { Component, useRef, useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { RNCamera } from 'react-native-camera';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styleSheet } from './stylesheet';
import { qrInfoReq, qrScanReq } from '../store/store';
// import client from '../../common/api/client';

const Qrscan = (props) => {
  const [qrInfo, setQrInfo] = useState({})
  const [dateData, setDateData] = useState('')
  const camera = useRef(null)
  const [controlCamera, setControlCamera] = useState(false)
  const CAM_VIEW_HEIGHT = Dimensions.get('screen').height;
  const CAM_VIEW_WIDTH = Dimensions.get('screen').width;
  const styles = useMemo(() => styleSheet(CAM_VIEW_HEIGHT, CAM_VIEW_WIDTH), [CAM_VIEW_HEIGHT, CAM_VIEW_WIDTH])

  const getQrInfo = async () => {
    const defaultEventId = await AsyncStorage.getItem('defaultEventId')
    const res = await qrInfoReq(defaultEventId)
    setQrInfo(res.data.data)
    const val1 = res.data.data.eventStartDate.split(' ')
    const val2 = res.data.data.eventStartDate.split(' ')
    setDateData(`${val1[0]} ~ ${val2[0]}`)
  }

  const onBarCodeRead = async (e) => {
    if (controlCamera) {
      return
    }
    camera.current.pausePreview()
    setControlCamera(true)

    const qrData = JSON.parse(e.data)
    console.log(JSON.stringify(qrData, null, 4))

    // const response = await client.post('rest/v1/s0221a0020/qr-scan', { ...qrData, "orgId": "39", "eventId": "4" })
    const response = await qrScanReq(...qrData, 39, 4);
    console.log(JSON.stringify(response, null, 4))

    setTimeout(() => {
      setControlCamera(false)
      camera.current.resumePreview()
    }, 1500)
  }

  useEffect(() => {
    getQrInfo()
  }, [])

  return (
    <RNCamera
      ref={camera}
      style={{ width: CAM_VIEW_WIDTH, height: CAM_VIEW_HEIGHT, }}
      type={RNCamera.Constants.Type.front}
      captureAudio={false}
      barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      cameraViewDimensions={{
        width: CAM_VIEW_WIDTH,
        height: CAM_VIEW_HEIGHT,
      }}
      rectOfInterest={{
        x: 0.5,
        y: 0,
        width: 0.35,
        height: 0.85,
      }}
      onBarCodeRead={(e) => onBarCodeRead(e)}
    >
      <View style={styles.wrap}>
        <View style={styles.inner}>
          <View style={styles.topBtnWrap}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => {
              props.navigation.goBack()
            }}>
              <ReactImage source={require('./assets/closeIcon.png')} style={styles.closeIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.eventSelectBtn} onPress={() => {
              props.navigation.navigate('EventList')
            }}>
              <ReactImage source={require('./assets/magnifier.png')} style={styles.searchIcon} />
              <Text style={styles.eventSelect}>행사선택</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.camArea} />
          <View style={styles.textGroup}>
            <Text style={styles.compName}>{qrInfo.namePathPriortiy}</Text>
            <Text style={styles.eventName}>{qrInfo.eventNm}</Text>
            <Text style={styles.eventDate}>{dateData}</Text>
          </View>
        </View>

      </View>
    </RNCamera >
  );
}

Qrscan.propTypes = {

}

Qrscan.defaultProps = {

}

export default Qrscan

