import { Dimensions, StyleSheet } from 'react-native';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({
    'background':{
      'height' : windowHeight,
      'backgroundColor' : 'transparent',
    },
    "wrap": {
      "width": '90%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 'auto',
      'marginBottom': 'auto',
      'backgroundColor': 'white',
      'elevation': 9,
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
      'width': 40,
      'height': 40,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 'auto',
      'marginBottom': 'auto',
    },
    'textWrap': {
      'flex': 0.8,
      'marginLeft': 10,
    },
    'alertText': {
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 16,
      "fontWeight": "800",
      'color' : '#333',
    },

    'btnWrap': {
      'width': '95%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 5,
      'marginBottom': 10,
      'flexDirection' : 'row',
      'justifyContent' : 'flex-end'
    },

    'cancelBtn' : {
      'marginRight' : 10,

    },

    'cancelText': {
      'width': 30,
      'color': '#f15a24',
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 16,
      "fontWeight": "800",
    },
    'closeText': {
      'width': 30,
      'color': '#f15a24',
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 16,
      "fontWeight": "800",


    },
  })
}
