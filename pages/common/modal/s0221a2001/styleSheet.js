import { Dimensions, StyleSheet } from 'react-native';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
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
      'marginBottom' : 80,
      'borderTopLeftRadius' : 20,
      'borderTopRightRadius' : 20,
    },

   
    'contentsWrap' : {
      'width' : '90%', 
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'marginTop' : '8%',
    },
    'evtName' : {
      'fontSize' : 26,
      'fontWeight' : '800',
      'fontFamily': "Apple SD Gothic Neo",
      'marginBottom' : 20
    },
    'evtAdmin':{
      'fontSize' : 16,
      'fontWeight' : '500',
      'fontFamily': "Apple SD Gothic Neo",
      'marginBottom' : 10,
      'color' : '#888'
    },
    'evtDep':{
      'fontSize' : 16,
      'fontWeight' : '500',
      'fontFamily': "Apple SD Gothic Neo",
      'marginBottom' : 10,
      'color' : '#888'
    },
    'evtLocation':{
      'fontSize' : 16,
      'fontWeight' : '500',
      'fontFamily': "Apple SD Gothic Neo",
      'marginBottom' : 10,
      'color' : '#888'
    },
    'evtDate':{
      'fontSize' : 16,
      'fontWeight' : '500',
      'fontFamily': "Apple SD Gothic Neo",
      'marginBottom' : 10,
      'color' : '#888'
    },
    'evtPath':{
      'fontSize' : 12,
      'fontWeight' : '500',
      'fontFamily': "Apple SD Gothic Neo",
      'color' : '#888',
      'marginBottom' : 2
    },
    'amountWrap':{
      'marginBottom' : 10,
      'flexDirection' : 'row',
      'justifyContent' : 'space-between',
    },
    'amount':{
      'fontSize' : 16,
      'fontWeight' : '700',
      'fontFamily': "Apple SD Gothic Neo",
      'color' : '#888',
  

    },

    'confirmBtn':{

      'marginTop' : 10,
      'marginBottom' : 30,
      'borderRadius' : 10,
      'backgroundColor' : '#f15a24',

    },

    'btnText' : {
      'fontSize' : 24,
      'fontWeight' : '500',
      'color' : 'white',
      'fontFamily': "Apple SD Gothic Neo",
      'textAlign' : 'center',
      'lineHeight': 50,
    }
    
  })
}