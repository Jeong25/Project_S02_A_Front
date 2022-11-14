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
    "title": {
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 22,
    },
    'contentsWrap': {
      'width': '90%',
      'marginTop': 10,
      'marginLeft': 'auto',
      'marginRight': 'auto',
    },
    'divider': {
      "width": '100%',
      'height': 2,
      'marginBottom': 3,
      'backgroundColor': '#e9e9e9',

    },



    "cell": {
      "width": "100%",
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

    "memberName": {
      "color": "#1d1d1d",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 18,
      "fontWeight": "700",
    },

    "memberDetail": {

      "fontSize": 11,
      "lineHeight": 13.2,
      "fontWeight": "500",
      "color": "#707070",
      "marginTop": 5,

    },


    "checkWrap": {
      "position": "absolute",
      "right": 0,
      "top": 6,
    },
    'unCheckBox': {
      'width': 30,
      'height': 30,
      'backgroundColor': '#d9d9d9',
      'borderRadius': 50,
      'display' : 'flex',
    },

    // 체크시 체크박스 배경이 변경됨

    'checkBox': {
      'width': 30,
      'height': 30,
      'backgroundColor': '#f15a24',
      'borderRadius': 50,
      'display' : 'flex',
    },

    'checkIcon': {
      'width': 25,
      'height': 25,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 'auto',
      'marginBottom': 'auto',
    },




  });
}