import { Dimensions, StyleSheet } from 'react-native';

export const QrModalStyleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
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
      "height": '65%',
      'position' : 'relative',
      'backgroundColor': 'white',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop':'20%',
    },

    'modalInner': {
     'height' : '100%',
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

    'textWrap' : {
     
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'marginTop' : '5%',
    },

    'memberName': {

      'fontFamily': "Apple SD Gothic Neo",
      'color': '#383838',
      'fontSize': 36,
      'textAlign' : 'center',
      'fontWeight': '700',
      'marginBottom': 5
  },

  'memberPosition': {

      'fontFamily': "Apple SD Gothic Neo",
      'color': '#707070',
      'fontSize': 22,
      'fontWeight': '700',
      'textAlign' : 'center',
  },
    'qrcodeWrap': {
  
      'width' : '100%',
      'height' : '62%',
      
    },

    'qrImg': { 

      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'marginBottom' : 'auto',
      'marginTop' : 'auto',
      'borderColor' : '#333',
      'borderWidth' : 4,
      'borderRadius' : 20,
    },

    'divider':{
      'width': '90%',
      'height': 2,
      'backgroundColor': '#e9e9e9',
      'marginLeft': 'auto',
      'marginRight': 'auto',
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
