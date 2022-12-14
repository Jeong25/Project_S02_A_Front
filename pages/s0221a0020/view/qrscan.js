import React, { Component, useRef, useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert, LogBox } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { RNCamera } from 'react-native-camera';
import { Camera, CameraType } from "react-native-camera-kit";
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styleSheet } from './stylesheet';
import { qrInfoReq, qrScanReq } from '../store/store';
import RNBeep from 'react-native-a-beep';
import CustomAlert from '../../common/Alert/Toast/Alert';
import NotificationSounds, { playSampleSound } from 'react-native-notification-sounds';

const Qrscan = (props) => {

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state'
  ]);

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

  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertConfirm, setAlertConfirm] = useState(false)
  const [alertImage, setAlertImage] = useState('info')
  const [alertUseFunc, setAlertUseFunc] = useState(true)

  const cusAlert = async (message, image, use) => {
    setAlertMessage(message)
    setAlertImage(image)
    setAlertConfirm(false)
    setAlertUseFunc(use)
    setAlertOpen(true)
  }

  const getQrInfo = async () => {
    // const defaultEventId = await AsyncStorage.getItem('defaultEventId')
    const params = props.route.params.data
    setEventId(params.eventId)
    const res = await qrInfoReq(params.eventId)
    setQrInfo(res.data.data)
    const val1 = res.data.data?.eventStartDate.split(' ')[0] || ''
    const val2 = res.data.data?.eventEndDate.split(' ')[0] || ''
    if (val1 === '') {
      setDateData(`????????? ????????? ?????????.`)
    } else {
      setDateData(`${val1} ~ ${val2}`)
    }
    const orgId = await AsyncStorage.getItem('orgId')
    setOrgId(orgId)
  }

  const processQr = async () => {
    // RNBeep.beep(false)
    NotificationSounds.getNotifications('notification').then((soundsList)  => {
      // console.log('SOUNDS', JSON.stringify(soundsList));
      playSampleSound(soundsList[2]);
    });
    setTimeout(() => {
      setScaned(true)
      setAlertOpen(false)
    }, 1500)
  }

  // const getEventInfo = async (params) => {
  //   setEventId(params.eventId)
  //   const res = await qrInfoReq(params.eventId)
  //   setQrInfo(res.data.data)
  //   const orgId = await AsyncStorage.getItem('orgId')
  //   setOrgId(orgId)
  //   const val1 = res.data.data?.eventStartDate.split(' ')[0] || ''
  //   const val2 = res.data.data?.eventEndDate.split(' ')[0] || ''
  //   if (val1 === '') {
  //     setDateData(`????????? ????????? ?????????.`)
  //   } else {
  //     setDateData(`${val1} ~ ${val2}`)
  //   }
  // }

  const onBarCodeRead = async (event) => {
    if (!scaned) {
      return
    }
    setScaned(false)
    try {
      const qrData = JSON.parse(event)
      const memId = qrData?.memberId
      const mbId = qrData?.mobileId
      console.log(event)
      console.log(memId, mbId, orgId, eventId)
      const res = await qrScanReq(memId, mbId, orgId, eventId)
      if (res.data.status === 200) {
        cusAlert(res.data.massage !== null ? res.data.massage : '?????????????????????.', 'check', true)
        processQr()
        // Alert.alert('QR Code', res.data.massage !== null ? res.data.massage : '?????????????????????.', [
        //   { text: '??????', onPress: () => setScaned(true) }
        // ])
      } else {
        cusAlert('?????? ??????????????????.', '', true)
        // Alert.alert('QR Code', '?????? ??????????????????.', [
        //   { text: '??????', onPress: () => setScaned(true) }
        // ])
      }
    } catch (error) {
      cusAlert('QR????????? ??????????????????.', '', true)
      // Alert.alert('QR Code', 'QR????????? ??????????????????.', [
      //   { text: '??????', onPress: () => setScaned(true) }
      // ])
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
          {/* <TouchableOpacity style={styles.eventSelectBtn} onPress={() => {
            props.navigation.navigate('EventList')
            // props.navigation.navigate('EventList', { getEventInfo })
          }}>
            <ReactImage source={require('../../common/img/magnifier.png')} style={styles.searchIcon} />
            <Text style={styles.eventSelect}>????????????</Text>
          </TouchableOpacity> */}
        </View>

        <Camera
          style={styles.camera}
          ref={camera}
          cameraType={cameraFront ? CameraType.Front : CameraType.Back}
          // Barcode Scanner Props
          scanBarcode={true}
          showFrame={false}
          laserColor="rgba(0, 0, 0, 0)"
          frameColor="rgba(0, 0, 0, 0)"
          surfaceColor="rgba(0 0, 0, 0)"
          onReadCode={(event) => onBarCodeRead(event.nativeEvent.codeStringValue)}
        />
        <View style={styles.textGroup}>
          <Text style={styles.compName}>{qrInfo?.namePathPriortiy || ''}</Text>
          <Text style={styles.eventName}>{qrInfo?.eventNm || ''}</Text>
          <Text style={styles.eventDate}>{dateData || ''}</Text>
        </View>
      </View>
      <CustomAlert
        openModal={alertOpen}
        confirm={alertConfirm}
        message={alertMessage}
        image={alertImage}
        CusFunc={() => setScaned(true)}
        useFunc={alertUseFunc}
        onClose={() => setAlertOpen(false)}
      />
      {/* </RNCamera > */}
    </>
  );
}

Qrscan.propTypes = {

}

Qrscan.defaultProps = {

}

export default Qrscan

