import { Platform, StyleSheet } from 'react-native';


export const styleSheet = (windowHeight, windowWidth) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({
    "wrap": {
      "backgroundColor": "white",
      "width": '100%',
      "height": '100%',
      'position': 'relative',
    },

    "topMenu": {
      "width": "100%",
      "height": 60,
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'paddingHorizontal': 20,
      'backgroundColor': '#f15a24',
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
    "regBtnWrap": {
      'position': 'absolute',
      'right': 16,
      'top': 18,
      "width": 25,
      "height": 25,
    },

    "registIcon": {
      'width': '100%',
      'height': '100%',
    },

    "title": {
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 22,
    },


    'contentsWrap': {
      'width': '90%',
      'marginTop': 20,
      'marginBottom': '30%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
    },

    'level1': {
      'width': '100%',
      'marginBottom': 5,
      'paddingLeft': 5,
    },
    'cell' : {
      'width' : "100%",
      'position' : 'relative',
      'paddingVertical': 10,
      'paddingHorizontal': 10,
      'flexDirection' : 'row',
      'justifyContent' : 'space-between',

    },
    'level2Wrap': {
      'width': '96%',
      'marginLeft': 'auto',
      'paddingLeft': 10,
      'borderLeftColor': '#888',
      'borderLeftWidth': 1,
    },
    'level2': {
      'paddingLeft': 5,
      'position': 'relative',
    },
    'level3Wrap': {
      'width': '96%',
      'marginLeft': 'auto',
      'paddingLeft': 10,
      'borderLeftColor': '#888',
      'borderLeftWidth': 1,
    },
    'level3': {
      'paddingLeft': 5,
      'position': 'relative',
    },
    'level4': {
      'width': '96%',
      'marginLeft': 'auto',
      'paddingLeft': 15,
      'position': 'relative',
      'borderLeftColor': '#888',
      'borderLeftWidth': 1,
    },
    'cellTitle': {
      'color': "#333",
      'fontSize': 20,
      'fontWeight': Platform.OS === 'ios' ? '700' : 'bold',
    },
    'numberWrap': {
      'flexDirection': 'row',
      'alignItems': 'baseline',
      'marginTop': 3

    },
    'memberNumber': {
      'width': 100,
      'color': "#888",
      'fontSize': 16,
      "fontFamily": "Apple SD Gothic Neo",
      'marginTop': 3


    },
    'eventDate': {
      'color': "#888",
      'fontSize': 16,
      "fontFamily": "Apple SD Gothic Neo",

    },
    'memberIcon': {
      'width': 15,
      'height': 15,
    },

    'titleWrap':{
      'flexDirection' : 'row',
      'alignItems' : 'center',
    },
    'plusIcon': {
      'width': 15,
      'height': 15,
      'marginLeft' : 10,
    },
    'plus': {
      'width': '100%',
      'height': '100%',
    },
  
    "dropDownBtn": {
    
    },
    'dropDownIcon' : {
      'width': 20,
      'height': 20,
    },

    'divider': {
      "width": '100%',
      'height': 2,
      'marginBottom': 3,
      'backgroundColor': '#e9e9e9',
    },

  });
}