import { Dimensions, StyleSheet } from 'react-native';

export const faqmodalStyleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
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
      "width": '100%',
      'backgroundColor': 'white',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 'auto',
      'marginBottom' : 100,
      'borderTopLeftRadius' : 20,
      'borderTopRightRadius' : 20,
    },

    'titleSection': {
      "width": '100%',
      'height': 50,
      
    },
    'modalTitle': {
      'textAlign': 'center',
      'fontSize': 18,
      'fontWeight': '900',
      'fontFamily': "Apple SD Gothic Neo",
      'color': 'white',
      'lineHeight': 50,

    },

    'cellWrap': {
      'width': '100%',
      "marginLeft": 'auto',
      "marginRight": 'auto',
    },

    'divider' : {
      'width' : '90%',
      'height' : 2,
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'backgroundColor' :'rgb(224, 221, 220)',
      
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
    'contentsWrap' : {
      'width' : '95%', 
      'marginLeft' : 'auto',
      'marginAuto' : 'auto',
      'marginTop' : '5%',
    },
    'evtName' : {
      'fontSize' : 26,
      'fontWeight' : '800',
      'fontFamily': "Apple SD Gothic Neo",
      'marginBottom' : 10
    },
    'evtAdmin':{
      'fontSize' : 16,
      'fontWeight' : '500',
      'fontFamily': "Apple SD Gothic Neo",
      'marginBottom' : 5,
      'color' : '#888'
    },
    'evtLocation':{
      'fontSize' : 16,
      'fontWeight' : '500',
      'fontFamily': "Apple SD Gothic Neo",
      'marginBottom' : 5,
      'color' : '#888'
    },
    'evtDate':{
      'fontSize' : 16,
      'fontWeight' : '500',
      'fontFamily': "Apple SD Gothic Neo",
      'marginBottom' : 5,
      'color' : '#888'
    },
    'amount':{
      'fontSize' : 16,
      'fontWeight' : '500',
      'fontFamily': "Apple SD Gothic Neo",
      'marginBottom' : 10,
      'color' : '#888',
    },

    'confirmBtn':{


    },

    'btnText' : {
      'backgroundColor' : 'red',
    }
  })
}