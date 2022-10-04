import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "wrap": {
      'position': 'relative',
      "width": '100%',
      "height": windowHeight,
      'backgroundColor': 'white',
      'flex': 1,
    },
    "inner": {
      "width": "85%",
      'height': '100%',
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'position': 'relative',
    },


    "topMenu": {
      "width": "100%",
      "height": 66,
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
    "topTitle": {
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 22,
    },
    "won": {
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      "fontSize": 14,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "700",
      "color": "#1d1d1d",
    },

    "contentsWrap": {
      "width": "100%",
      'marginTop': -5
    },
    "contentsInner": {
      'width': '45%',
      'height': '100%',
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
    },

    "form": {
      "width": "100%",
      'marginTop': 20
    },

    "contents": {
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
      'marginBottom': -20,
    },
    "label": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,

      'marginBottom': 5,

    },
    "modifyLabel": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,

    },

    "modifyText": {
      'width': 80,
      'lineHeight': 23,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'center',
      "fontSize": 13,
      'marginTop': 5,

    },
    "modifyTextLong": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'lineHeight': 30,
      'textAlign': 'center',
      'color': '#383838',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,
    },
    "modifyWon": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#1d1d1d',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,

    },
    "searchBtn": {
      "width": 22,
      "height": 22,
      "marginTop": -5,
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      'zIndex': 1
    },
    "modifySearchBtn": {
      "marginTop": 5,
      "width": 22,
      "height": 22,
      'zIndex': 1
    },
    "searchIcon": {
      "width": "100%",
      "height": "100%",
    },

    "input": {
      // "width": windowWidth * 0.85 * 0.8,
      "width": "100%",
      "height": 35,
      "overflow": "hidden",
      "borderBottomWidth": 2,
      "borderBottomColor": "#707070",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 20,
      "fontWeight": '700',
      "color": "#383838",
      "paddingTop": 0,
      "paddingBottom": 10,
      'textAlign': 'center'
    },
    "modifyInputWrap": {
      'flexDirection': 'row',
      'alignItems': 'center',
    },

    "amountInput": {
      // "width": windowWidth * 0.85 * 0.8,
      "width": "100%",
      "height": 35,
      "overflow": "hidden",
      "borderBottomWidth": 2,
      "borderBottomColor": "#707070",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 20,
      "fontWeight": '700',
      "color": "#383838",
      "paddingTop": 0,
      "paddingBottom": 10,
      'paddingRight': 25,
      'textAlign': 'right'
    },


    "addBtn": {
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      "width": 20,
      "height": 20,
      "backgroundColor": "#f15a24",
      "borderRadius": 50,
      'zIndex': 1
    },
    "modifyAddBtn": {

      "width": 20,
      "height": 20,
      "backgroundColor": "#f15a24",
      "borderRadius": 50,
      'zIndex': 1
    },

    "addIcon": {
      "width": 13,
      "height": 13,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 3,
    },
    'sepLine': {

      'width': '100%',
      'height': 3,
      'backgroundColor': '#bcbcbc',
      'marginTop': 20,

    },

    "textfield": {
      "height": windowHeight * 0.10,
      "borderRadius": 10,
      "borderWidth": 2,
      "borderColor": "#707070",
      "marginTop": 8,
      'paddingLeft': 10,
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 14,
      "textAlignVertical": "top",
    },
    'contentsTextarea': {
      'marginTop': 10,
      'height': '20%'
    },

    'opinion': {
      'height': '50%',
      'width': '100%',
      'borderRadius': 10,
      'borderWidth': 2,
      'borderColor': '#707070',
      'marginTop': 10,
      'fontFamily': 'Apple SD Gothic Neo',
      'fontSize': 12,
      'textAlignVertical': 'top'
    },

    "selectBox": {
      "width": "70%",
      // "border": "none",
      // "borderBottomWidth": 3,
      // "borderBottomColor": "#707070",
    },

    "btnWrap": {
      "width": "100%",
      "height": 50,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 40,
      "flexDirection": "row",
      "justifyContent": "center",
      "alignItems": "center",
    },
    "modifyBtnWrap": {
      "width": "100%",
      "height": 50,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginBottom': 40,
      "flexDirection": "row",
      "justifyContent": "space-between",
      "alignItems": "center",
    },

    "requestBtn": {
      "width": 140,
      "height": 50,
      "backgroundColor": "#F15A24",
      "borderRadius": 50,
      "textAlign": "center",
      "color": "white",
      "fontSize": 21,
      "fontWeight": "500",
      "lineHeight": 50,
      "fontFamily": "Apple SD Gothic Neo"
    },

    "delBtn": {
      "width": 140,
      "height": 50,
      "backgroundColor": "#707070",
      "borderRadius": 50,
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      "fontSize": 21,
      "textAlign": "center",
      "lineHeight": 50,
    },
    'bottomMenu': {
      'width': '100%',
      'height': 80,
      'backgroundColor': 'white',
      'position': 'absolute',
      'bottom': 0,
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-around',
      'paddingHorizontal': 30,
      'borderTopWidth': 2,
      'borderTopColor': "rgba(112, 112, 112 , 0.3)",


    },
    'scanBtnIcon': {
      'width': 30,
      'height': 30,
      'marginLeft': 'auto',
      'marginRight': 'auto',
    },

    'homeBtn': {

      'alignItems': 'center',
    },

    'homeIcon': {
      'width': 30,
      'height': 30,
      'marginLeft': 'auto',
      'marginRight': 'auto',
    },
    'costIcon': {
      'width': 30,
      'height': 30,
      'marginLeft': 'auto',
      'marginRight': 'auto',

    },
    'paymentIcon': {
      'width': 30,
      'height': 30,
      'marginLeft': 'auto',
      'marginRight': 'auto',
    },

    'homeText': {
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#707070',
      'fontSize': 12,
      'fontWeight': '700',
      'marginTop': 5,
      'textAlign': 'center'

    },
    'costText': {
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#707070',
      'fontSize': 12,
      'fontWeight': '700',
      'marginTop': 5

    },
    'paymentText': {
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#707070',
      'fontSize': 12,
      'fontWeight': '700',
      'marginTop': 5
    },
    'qrscanText': {
      'width': 50,
      'fontFamily': "Apple SD Gothic Neo",
      'color': '#707070',
      'fontSize': 12,
      'fontWeight': '700',
      'marginTop': 5,
      'textAlign': 'center',
    },
  })
}