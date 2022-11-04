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
    "wrap": {
      "width": '100%',
      "height": '100%',
      'backgroundColor': 'white',
    },
    'titleSection':{
      'backgroundColor' : '#f15a24',
      'flexDirection' : 'row',
      'justifyContent' : 'space-between',
      'alignItems' : 'center',
    
    },
    'saveBtn':{
      'marginRight' :20,
    },
    'saveBtnText':{
      'color' :'white',
    },
    "topMenu": {
      "width": "100%",
      "height": 60,
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'paddingHorizontal': 20,
      'backgroundColor' :'#f15a24',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'center',
    },
    "backBtn": {
      "overflow": "hidden",
      'position': 'absolute',
      'left': 16,
      'top': 15,
      "width": 40,
      "height": 40,
    },
    "backBtnIcon": {
      "width": 30,
      "height": 30
    },
    "topTitle": {
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 22,
    },

    'contentsWrap': {
      'width': '90%',
      "marginLeft": 'auto',
      "marginRight": 'auto',
    },
   
    

    

    "label": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 14,
      'marginTop': 10,
      'marginBottom': 5,
    },

    "input": {
      // "width": windowWidth * 0.85 * 0.8,
      "width": "100%",
      "height": 35,
      "overflow": "hidden",
      "borderBottomWidth": 2,
      "borderBottomColor": "#707070",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 18,
      "fontWeight": '700',
      "color": "#383838",
      "paddingTop": 0,
      "paddingBottom": 5,
      'textAlign' : 'center'
    },
    'delAccountBtn' : { 
      'backgroundColor' : '#e9e9e9',
      'borderRadius' : 10,

    },
    'delBtnText' : { 
      'color' : 'red',
      'fontSize' : 24,
      'fontWeight' : '500',
      'fontFamily': "Apple SD Gothic Neo",
      'textAlign' : 'center',
      'lineHeight': 50,
    },
    'saveBtn':{

      'borderRadius' : 10,
      'backgroundColor' : '#f15a24',

    },

    'saveBtnText' : {
      'fontSize' : 24,
      'fontWeight' : '500',
      'color' : 'white',
      'fontFamily': "Apple SD Gothic Neo",
      'textAlign' : 'center',
      'lineHeight': 50,
    }
    

    
  })
}