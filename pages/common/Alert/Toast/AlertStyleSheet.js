import { Dimensions, StyleSheet } from 'react-native';

export const AlertStyleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({
    'background':{
      "width": '100%',
      "height": windowHeight,
      'backgroundColor': 'rgba(0,0,0,0.7)',
      "position": 'absolute',
      "zIndex": 9,
    },
    "wrap": {
      "width": '90%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop':'60%',
      'backgroundColor': 'white',
      'elevation': 9, //android only
      'shadowColor': '#333',
      'shadowOpacity': 0.7,
      'shadowOffset': {
        height: 2,
        width: 1
      },
      'borderRadius': 10,

    },


    'contentsWrap': {
      'width': '95%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 10,
      'flexDirection': 'row',
      'alignItems' : 'flex-start',

    },
    'iconWrap': {
      'flex': 0.15,
    },
    'alertIcon': {
      'width': 35,
      'height': 35,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 'auto',
      'marginBottom': 'auto',
    },
    'warningIcon': {
      'width': 40,
      'height': 40,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 'auto',
      'marginBottom': 'auto',
    },
    'textWrap': {
      'flex': 0.8,
      'marginLeft': 15,
      'marginTop' : 10,
    },
    'alertText': {
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 16,
      "fontWeight": "800",
      'color' : '#333',
    },

    'btnWrap': {
      'width': '90%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 5,
      'marginBottom': 10,
      'flexDirection' : 'row',
      'justifyContent' : 'flex-end'
    },
    'cancelBtn' :{
      'marginRight' : 20,

    },
    'cancelText': {
      'width': 30,
      'color': '#888',
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 16,
      "fontWeight": "800",
    },
    'confirmText': {
      'width': 30,
      'color': '#f15a24',
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 16,
      "fontWeight": "800",
    },
  })
}
