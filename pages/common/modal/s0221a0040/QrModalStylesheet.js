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
      'marginTop':'30%',
    },

    'modalInner': {
      "position": "relative",
      "width": "100%",
      "marginLeft": 'auto',
      "marginRight": 'auto',
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
      'position' :'absolute',
      'bottom' : 30,
      'left' : 0,
      'right' : 0,
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
    },

    'memberName': {

      'fontFamily': "Apple SD Gothic Neo",
      'color': '#383838',
      'fontSize': 36,
      'textAlign' : 'center',
      'fontWeight': '700',
      'marginTop': 10,
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
  
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'marginTop' : '20%',
      
  
    },

    'divider':{
      'width': '100%',
      'height': 10,
      'backgroundColor': '#e9e9e9',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 50,
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