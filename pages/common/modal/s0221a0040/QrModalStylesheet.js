import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const modalStyleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "modalBox": {
      "width": '100%',
      "height": '100%',
      'backgroundColor': 'rgba(0,0,0,0.7)',
      "position": 'absolute',
      "zIndex": 9,

    },
    "box": {
      "width": '90%',
      "height": '50%',
      'backgroundColor': 'white',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop':'40%',
    },

    'modalInner': {
      "position": "relative",
      "width": "100%",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      // 'overflow': 'scroll'
    },

    'titleSection': {
      "width": '100%',
      'height': 50,
      'backgroundColor' : '#f15a24',
      'textAlignVertical': 'center',
      'position' : 'relative',
      

    },
    'modalTitle': {
      'textAlign': 'center',
      'fontSize': 18,
      'fontWeight': '900',
      'fontFamily': "Apple SD Gothic Neo",
      'color': 'white',
      'lineHeight': 50,

    },
    'memberName': {

      'fontFamily': "Apple SD Gothic Neo",
      'color': '#383838',
      'fontSize': 28,
      'textAlign' : 'center',
      'fontWeight': '700',
      'marginTop': 10,
      'marginBottom': 5
  },

  'memberPosition': {

      'fontFamily': "Apple SD Gothic Neo",
      'color': '#707070',
      'fontSize': 12,
      'fontWeight': '700',
      'textAlign' : 'center',
  },
    'qrcodeWrap': {
   
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'marginTop' : 'auto',
      'marginBottom' : 'auto',

    },
    'qrcode': {
      'width' : 250,
      'height' : 250,
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'marginTop' : 'auto',
      'marginBottom' : 'auto',
      'backgroundColor' : '#888'
    },
    'closeBtn':{
      'width' :25,
      'height' :25,
      'position' : 'absolute',
      'left' : 12,
      'top' : 13,
      'zIndex' : 9


    },

    'backBtnIcon': {
      'width' : '100%',
      'height' : '100%'
      
    },
  })
}