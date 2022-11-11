import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 640
  return StyleSheet.create({

   
    "wrap": {
      "width": "100%",
      "height": "100%",
      'backgroundColor' : 'white',
      "position": "relative",
      'overflow': 'hidden',
    },

    "inner": {
      "width": "90%",
      "height": "100%",
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',

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

    "title": {
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 22,
    },

    "layer1": {
      'marginTop': 15,
      "width": "90%",
      'height' : 40,
      'borderRadius' : 10,
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-around',
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'backgroundColor' : '#e9e9e9'
    },

    "searchInput": {
      "width": 120,
      "height": 40,
      "borderWidth": 2,
      "borderColor": "#707070",
      "borderRadius": 50,
      "textAlign": "center",
      "fontFamily": " Apple SD Gothic Neo",
      "marginRight": 10,
      "color": "#ababab",
      "fontSize": 14,
      "backgroundColor": "transparent",
      'lineHeight': 40
    },

    "searchBtn": {
      "width": 40,
      "height": 40,
      'alignItems' : 'center',
      'justifyContent' : 'center'

    },

    "searchIcon": {
      "width": 25,
      "height": 25,
    },
      
    "inputWrap": {
      "width": '90%',
      "height": 40,

    },

    "input": {
      'height' : 40,
      "color": "#888",
      "fontSize": 16,
      "textAlign": "left",
      'paddingLeft' : 20,
    },

    "cellWrap": {
      "width": "100%",
      "height": "70%",
      "position": "absolute",
      "top": 140,       
    },

    'divider':{
      'width': '100%',
      'height': 8,
      'backgroundColor': '#e9e9e9',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 15,
    },
    'cellDivider':{
      'width' : '90%',
      'height' : 2,
      'backgroundColor' : '#e9e9e9',
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'marginTop': 2,
      'marginBottom': 2,
    },

    "cell": {
      "width": "90%",
      "height": 50,
      "marginLeft": 'auto',
      "marginRight": 'auto',      
    },

    "cellInner": {
      "width": "90%",
      "marginLeft": "auto",
      "marginRight": "auto",
      "marginTop": "auto",
      "marginBottom": "auto",
      "position": "relative",
    },
    'eventName': {
      "color": "#1d1d1d",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 18,
      "fontWeight": "700",
    },

    "eventDate": {

      "fontSize": 11,
      "lineHeight": 13.2,
      "fontWeight": "500",
      "color": "#707070",
      "marginTop": 5,
    },

  })
}