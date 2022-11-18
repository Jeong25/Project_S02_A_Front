import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 640
  return StyleSheet.create({
    "wrap": {
      "width": "100%",
      "height": "100%",
      "backgroundColor": "#ffffff",
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
      'justifyContent': 'space-between',
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'backgroundColor' : '#e9e9e9'
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

    "selectWrap": {
      "width": '25%',
      "textAlign": "right",
      "flexDirection": "row",
      "justifyContent": "center",
      "alignItems": "center",
      'borderRightColor' : 'white',
      'borderRightWidth' : 2,
      
    },
   
    "searchDate": {
      "width": '60%',
      "height": 40,
      // "borderWidth": 2,
      // "borderColor": "#707070",
      'backgroundColor' : '#e9e9e9',
      "borderRadius": 10,
      "textAlign": "center",
      "lineHeight": 40,
      "flexDirection": "row",
      "justifyContent": "space-around",
      "alignItems": "center",
    },

    "inputDate": {
      "height": 40,
      "color": "#333",
      "fontSize": 16,
      'fontFamily': 'Apple SD Gothic Neo',
      "fontWeight": "700",
      "textAlign": "center",
      "backgroundColor": "transparent",
      "alignItems": "center",
      "lineHeight": 40,
     },
    'wave':{
      'marginHorizontal' : -10,
    },

    "cellWrap": {
      "width": "100%",
      'marginBottom' :'25%'
    },

    'divider': {
      'width': '100%',
      'height': 8,
      'backgroundColor': '#e9e9e9',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 15,
      'marginBottom': 5,
    },
    'cellDivider': {
      'width': '90%',
      'height': 2,
      'backgroundColor': '#e9e9e9',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 2,
      'marginBottom': 2,

    },

    "cellGreen": {
      "width": "90%",
      "height": 50,
      "marginLeft": 'auto',
      "marginRight": 'auto', 
      'borderLeftWidth' : 7,
      'borderLeftColor' : 'green'
    },
    "cellRed": {
      "width": "90%",
      "height": 50,
      "marginLeft": 'auto',
      "marginRight": 'auto', 
      'borderLeftWidth' : 7,
      'borderLeftColor' : 'red'
    },
    "cellGray": {
      "width": "90%",
      "height": 50,
      "marginLeft": 'auto',
      "marginRight": 'auto', 
      'borderLeftWidth' : 7,
      'borderLeftColor' : 'gray'
    },

    "cellInner": {
      "width": "90%",
      "marginLeft": "auto",
      "marginRight": "auto",
      "marginTop": "auto",
      "marginBottom": "auto",
      "position": "relative",
    },

    "cellTitle": {
      "color": "#1d1d1d",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 18,
      "fontWeight": "700",
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

    "cellAmount": {
      "position": "absolute",
      "right": 0,
      "top": 10,
      "color": "#F15A24",
      "fontSize": 21,
      "fontWeight": "800",
    },

    "regBtnWrap": {
      'position' : 'absolute',
      'right': 16,
      'top': 18,
      "width": 25,
      "height": 25,
    },

    "registIcon": {
      'width' : '100%',
      'height' : '100%',
    },
    
  })
}