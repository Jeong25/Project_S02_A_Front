import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 640
  return StyleSheet.create({
    "wrap": {
      "width": "100%",
      "height": "100%",
      "backgroundColor": "#ffffff",
      'overflow': 'hidden',
      'zIndex': 1,
    },

    "inner": {
      "width": "90%",
      "height": "100%",
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'zIndex': 2,
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

    "searchDate": {
      "width": '85%',
      "height": 40,
      "borderWidth": 2,
      "borderColor": "#707070",
      "borderRadius": 50,
      "color": "#707070",
      "textAlign": "center",
      "lineHeight": 38,
      "flexDirection": "row",
      "justifyContent": "space-evenly",
      "alignItems": "center",
    },

    "inputDate": {
      "height": 40,
      "color": "#ababab",
      "fontSize": 16,
      "textAlign": "center",
      "backgroundColor": "transparent",
      "alignItems": "center",
      "lineHeight": 40
    },

    "cellWrap": {
      "width": "100%",
      "height": "70%",
      "position": "absolute",
      "top": 140,   
    },

    'divider': {
      'width': '100%',
      'height': 8,
      'backgroundColor': '#e9e9e9',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 15,
    },
    'cellDivider': {
      'width': '90%',
      'height': 2,
      'backgroundColor': '#e9e9e9',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 5,

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
      "position": "relative",
    },

    "cellTitle": {
      "color": "#1d1d1d",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 18,
      "fontWeight": "700",
      "marginTop": 5
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
      "top": 14,
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
      'textAlign': 'center'
    },
  })
}