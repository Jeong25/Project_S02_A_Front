import React, { useEffect, useMemo, useState, Fragment } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Keyboard, Alert, TextInput } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import Footer from '../../common/footer/Footer';
import { findCdReq } from '../store/store'
import CustomAlert from '../../common/Alert/Toast/Alert';

const SearchCode = (props) => {

  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])
  const [inputData, setInputData] = useState({
    // eventNm: "",
    // memberName: "",
    ceoName: "",
    orgName: ""
  })

  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertConfirm, setAlertConfirm] = useState(false)
  const [alertImage, setAlertImage] = useState('info')

  const cusAlert = async (message, image) => {
    setAlertMessage(message)
    setAlertImage(image)
    setAlertConfirm(false)
    setAlertOpen(true)
  }

  const onClick = async () => {
    const res = await findCdReq(inputData)
    Keyboard.dismiss()
    console.log(JSON.stringify(res.data.data))
    if (res.data.data.length > 0) {
      let data = ''
      for (let i = 0; i < res.data.data.length; i++) {
        data += `${res.data.data[i].eventNm}: ${res.data.data[i].eventCode}\n`
      }
      cusAlert(data, 'check')
    } else {
      cusAlert('부서코드를 찾을 수 없습니다.', '')
    }
  }

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
            <Text style={styles.title}>부서코드 찾기</Text>
          </View>
          <View style={styles.contentsWrap}>
            <View style={styles.inputWrap}>
              <Text style={styles.label}>단체명</Text>
              <TextInput style={styles.input} onChange={(e) => setInputData({ ...inputData, orgName: e.nativeEvent.text })}></TextInput>
            </View>
            <View style={styles.inputWrap}>
              <Text style={styles.label}>대표자명</Text>
              <TextInput style={styles.input} onChange={(e) => setInputData({ ...inputData, ceoName: e.nativeEvent.text })}></TextInput>
            </View>
            {/* <View style={styles.inputWrap}>
              <Text style={styles.label}>부서명</Text>
              <TextInput style={styles.input} onChange={(e) => setInputData({ ...inputData, eventNm: e.nativeEvent.text })}></TextInput>
            </View>
            <View style={styles.inputWrap}>
              <Text style={styles.label}>부서책임자명</Text>
              <TextInput style={styles.input} onChange={(e) => setInputData({ ...inputData, memberName: e.nativeEvent.text })}></TextInput>
            </View> */}
          </View>
          <View style={styles.btnWrap}>
            <TouchableOpacity style={styles.searchBtn} onPress={() => onClick()}>
              <Text style={styles.searchBtnText}>부서코드 찾기</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </SafeAreaView>
      <Footer
        navigation={props.navigation}
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <CustomAlert
          openModal={alertOpen}
          confirm={alertConfirm}
          message={alertMessage}
          image={alertImage}
          onClose={() => setAlertOpen(false)}
        />
    </Fragment >

  );
}

export default SearchCode

SearchCode.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
