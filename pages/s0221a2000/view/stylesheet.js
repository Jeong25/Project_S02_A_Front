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
      'zIndex': 1
    },

    "inner": {
      "width": "90%",
      "height": "100%",
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'zIndex': 2,
      'backgroundColor' : 'blue'

    },
    "topMenu": {

      "width": "100%",
      "height": 66,
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
      'marginTop': 20,
      "width": "90%",
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
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
      "fontSize": 12,
      "backgroundColor": "transparent",
      'lineHeight': 40,
    },

    "searchBtn": {
      "width": 37,
      "height": 37,
      "borderRadius": 50,
      "backgroundColor": "#f14a24",

    },

    "searchIcon": {
      "width": 25,
      "height": 25,
      "marginTop": 5,
      "marginLeft": "auto",
      "marginRight": "auto",
    },

    "input": {
      "width": '85%',
      "height": 40,
      "color": "#ababab",
      "borderWidth": 2,
      "borderColor": "#707070",
      "borderRadius": 50,
      "fontSize": 16,
      "textAlign": "center",
      "backgroundColor": "transparent",
      "alignItems": "center",
      "lineHeight": 40
    },

    "cellWrap": {
      "width": "100%",
      "height": "65%",
      "position": "absolute",
      "top": 165,      
      
    },

    'divider':{
      'width': '100%',
      'height': 8,
      'backgroundColor': '#e9e9e9',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 20,
    },
    'cellDivider':{
      'width' : '90%',
      'height' : 2,
      'backgroundColor' : '#e9e9e9',
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'marginTop' : 5,

    },

    "cell": {
      "width": "90%",
      "height": 65,
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'paddingLeft': 20,
      'flexDirection' : 'row',
      'alignItems': 'center',
      
    },

    'cellName': {

      'fontSize': 18,
      'fontWeight': '800',
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#1d1d1d',
      'marginLeft': 30,

    },


    "cellDate": {

      "fontSize": 11,
      "lineHeight": 13.2,
      "fontWeight": "500",
      "color": "#707070",
      "marginTop": 5,

    },

    "name": {
      "fontSize": 14,
      "fontWeight": "700",
      'lineHeight': 20,
    },

  
  
  })
}