import React from 'react';
import { Dimensions, } from 'react-native';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Image as ReactImage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styleSheet } from './stylesheet';

const Signup = (props) => {
  const styles = styleSheet()

  const onAgree = async () => {
    await AsyncStorage.setItem('permissionAgree', 'agree')
    props.navigation.reset({ routes: [{ name: 'Signup' }] })
  }

  return (
    <ScrollView style={styles.wrap}>
      <View style={styles.inner}>
        <View style={styles.topLogoWrap}>
          <ReactImage source={require('./assets/orangeLogo.png')} style={styles.topLogo} />
          <View style={styles.titleText}>
            <Text style={styles.mainTitle}>접근권한 안내</Text>
            <Text style={styles.subTitle}>고객님의 안전하고 편리한 앱 이용을 위해{"\n"} 다음 권한의 허용이 필요합니다.</Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.infoWrap}>
          <View style={styles.info}>
            <View style={styles.infoIcon}>
              <ReactImage
                source={require('./assets/camera.png')}
                style={styles.icon} />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.text1}>
                카메라(선택){"\n"}
                <Text style={styles.text2}>
                  상대방의 QR코드 검증 용도
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.infoIcon}>
              <ReactImage
                source={require('./assets/image.png')}
                style={styles.icon} />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.text1}>
                사진/미디어(선택){"\n"}
                <Text style={styles.text2}>
                  프로필 사진 설정시 이미지 파일 첨부 용도
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.infoIcon}>
              <ReactImage
                source={require('./assets/paperclip.png')}
                style={styles.icon} />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.text1}>
                파일(선택){"\n"}
                <Text style={styles.text2}>
                  기타 파일 첨부 용도
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.infoIcon}>
              <ReactImage
                source={require('./assets/info.png')}
                style={styles.icon} />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.text2}>
                선택적 접근 권한은 기능 사용시 허용이 필요하며,{"\n"}
                비허용시에도 해당기능 외 서비스 이용이 가능합니다.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.BtnWrap}>
        <TouchableOpacity onPress={onAgree}>
          <Text style={styles.confirmBtn}>확인</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

Signup.propTypes = {

}

Signup.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}

export default Signup