import React, { Component, useRef, useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { RNCamera } from 'react-native-camera';
import { Camera, CameraType } from "react-native-camera-kit";
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styleSheet } from './stylesheet';
import { qrInfoReq, qrScanReq } from '../store/store';

const Qrscan = (props) => {
  const [qrInfo, setQrInfo] = useState({})
  const [dateData, setDateData] = useState('')
  const [orgId, setOrgId] = useState('')
  const [eventId, setEventId] = useState('')
  const camera = useRef(null)
  const [scaned, setScaned] = useState(true);
  const [controlCamera, setControlCamera] = useState(false)
  const [cameraFront, setCameraFront] = useState(true)
  const CAM_VIEW_HEIGHT = Dimensions.get('screen').height;
  const CAM_VIEW_WIDTH = Dimensions.get('screen').width;
  const styles = useMemo(() => styleSheet(CAM_VIEW_HEIGHT, CAM_VIEW_WIDTH), [CAM_VIEW_HEIGHT, CAM_VIEW_WIDTH])

  const getQrInfo = async () => {
    const defaultEventId = await AsyncStorage.getItem('defaultEventId')
    const orgId = await AsyncStorage.getItem('orgId')
    const res = await qrInfoReq(defaultEventId)
    setOrgId(orgId)
    setQrInfo(res.data.data)
    setEventId(defaultEventId)
    const val1 = res.data.data?.eventStartDate.split(' ')[0] || ''
    const val2 = res.data.data?.eventEndDate.split(' ')[0] || ''
    if (val1 === '') {
      setDateData(`행사를 선택해 주세요.`)
    } else {
      setDateData(`${val1} ~ ${val2}`)
    }
  }

  const onBarCodeRead = async (event) => {
    if (!scaned) {
      return
    }
    setScaned(false)
    const qrData = JSON.parse(event)
    const memId = qrData.memberId
    const mbId = qrData.mobileId
    console.log(event)
    console.log(memId, mbId, orgId, eventId)
    try {
      const res = await qrScanReq(memId, mbId, orgId, eventId)
      Alert.alert('QR Code', '등록되었습니다.')
      setScaned(true)
      return res
    } catch (error) {
      Alert.alert('QR Code', '오류가 발생했습니다.')
      setScaned(true)
    }
  }
  // const onBarCodeRead = async (e) => {
  //   if (controlCamera) {
  //     return
  //   }
  //   camera.current.pausePreview()
  //   setControlCamera(true)

  //   try {
  //     const qrData = JSON.parse(e.data)
  //     console.log(JSON.stringify(qrData, null, 4))
  //     const response = await qrScanReq(...qrData, orgId, eventId);
  //     console.log(JSON.stringify(response, null, 4))
  //   } catch (error) {
  //     console.log(error)
  //   }

  //   setTimeout(() => {
  //     setControlCamera(false)
  //     camera.current.resumePreview()
  //   }, 1500)
  // }

  const getEventInfo = async (params) => {
    setEventId(params.eventId)
    const res = await qrInfoReq(params.eventId)
    setQrInfo(res.data.data)
    const val1 = res.data.data?.eventStartDate.split(' ')[0] || ''
    const val2 = res.data.data?.eventEndDate.split(' ')[0] || ''
    if (val1 === '') {
      setDateData(`행사를 선택해 주세요.`)
    } else {
      setDateData(`${val1} ~ ${val2}`)
    }
  }

  useEffect(() => {
    getQrInfo()
    setScaned(true)
  }, [])

  return (
    <>
      {/* <RNCamera
        ref={camera}
        style={{ width: CAM_VIEW_WIDTH, height: CAM_VIEW_HEIGHT, }}
        type={cameraFront ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
        captureAudio={false}
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
        cameraViewDimensions={{
          width: CAM_VIEW_WIDTH,
          height: CAM_VIEW_HEIGHT,
        }}
        rectOfInterest={{
          x: cameraFront ? 0.5 : 0.1,
          y: 0,
          width: 0.35,
          height: 0.85,
        }}
        onBarCodeRead={(e) => onBarCodeRead(e)}
      > */}
      <SafeAreaView />

      <View style={styles.wrap}>
        <View style={styles.topBtnWrap}>
          <TouchableOpacity style={styles.closeBtn} onPress={() => {
            props.navigation.goBack()
          }}>
            <ReactImage source={require('../../common/img/closeIcon.png')} style={styles.closeIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeBtn} onPress={() => {
            setCameraFront(!cameraFront)
          }}>
            <ReactImage source={require('../../common/img/change.png')} style={styles.closeIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.eventSelectBtn} onPress={() => {
            props.navigation.navigate('EventList', { getEventInfo })
          }}>
            <ReactImage source={require('../../common/img/magnifier.png')} style={styles.searchIcon} />
            <Text style={styles.eventSelect}>행사선택</Text>
          </TouchableOpacity>
        </View>

        <Camera
          style={styles.camera}
          ref={camera}
          cameraType={cameraFront ? CameraType.Front : CameraType.Back}
          // Barcode Scanner Props
          scanBarcode={true}
          showFrame={false}
          ratioOverlay={['5:4']}
          laserColor="rgba(0, 0, 0, 0)"
          frameColor="rgba(0, 0, 0, 0)"
          surfaceColor="rgba(0, 0, 0, 0)"
          onReadCode={(event) => onBarCodeRead(event.nativeEvent.codeStringValue)}
        />

        <View style={styles.textGroup}>
          <Text style={styles.compName}>{qrInfo?.namePathPriortiy || ''}</Text>
          <Text style={styles.eventName}>{qrInfo?.eventNm || ''}</Text>
          <Text style={styles.eventDate}>{dateData || ''}</Text>
        </View>
      </View>
      {/* </RNCamera > */}
    </>
  );
}

Qrscan.propTypes = {

}

Qrscan.defaultProps = {

}

export default Qrscan

