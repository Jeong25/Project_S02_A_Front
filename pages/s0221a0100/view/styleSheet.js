import { Dimensions, StyleSheet } from 'react-native';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "wrap": {
      "width": '100%',
      "height": '100%',
      'backgroundColor': 'white',
      'display' : 'flex',
    },
    'titleSection':{
      'backgroundColor' : '#f15a24',
      'flexDirection' : 'row',
      'justifyContent' : 'space-between',
      'alignItems' : 'center',
    
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
      'marginTop' : '10%',
    },
    'infoWrap' : {
      'marginBottom' : '5%',

    },
  

    "label": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 14,
      'marginBottom': 5,
    },

    "userInfo": {
      "width": "100%",
      "lineHeight": 35,
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 18,
      "fontWeight": '700',
      "color": "#383838",
      'textAlign' : 'center',
      'borderBottomWidth' : 2,
      'borderBottomColor' :'#888'
    },

    'btnWrap':{
      'width' : '90%',
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'marginTop' :'auto',
      'marginBottom' : 30,
    },
    
    'delAccountBtn' : { 
      'width' : 100,
      'backgroundColor' : '#e9e9e9',
      'borderRadius' : 10,
      'marginLeft' : 'auto',


    },
    'delBtnText' : { 
      'color' : '#888',
      'fontSize' : 12,
      'fontWeight': Platform.OS === 'ios' ? '700' : 'bold' ,
      'fontFamily': "Apple SD Gothic Neo",
      'textAlign' : 'center',
      'lineHeight': 40,
    },
    
    
  })
}