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
      'marginLeft': 'auto',
      'marginRight': 'auto',
    },


    'form': {
      'width': '100%',
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'marginTop': '8%',
    },
    'layer': {
      'width': '100%',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
      'marginBottom': '5%',

    },

    'inputWrap': {
      'width': '45%',
    },
   
    'infoWrap': {
      'marginBottom': '5%',
    },

    "label": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 14,
    },
    'depWrap' : {
      'flexDirection': 'row',
      'borderBottomWidth': 2,
      'borderBottomColor': '#888',


    },
    'searchIcon':{
      'width' :25,
      'height' :25,
      'marginTop': 5,
      'marginLeft' : 'auto'
    },
    'won':{
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 18,
      'marginTop': 8,
    },


    'checkBoxWrap': {
      'flexDirection': 'row',
      'alignItems': 'center',

    },
    "checkText": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 14,
      'marginLeft': 10,
    },
    'checkBox': {
      'backgroundColor': '#f15a24',
      'borderRadius': 50,
      'width': 30,
      'height': 30,
    },
    'checkIcon': {
      'width': '100%',
      'height': '100%',
    },
    'unCheckBox': {
      'width': 30,
      'height': 30,
      'backgroundColor': '#d9d9d9',
      'borderRadius': 100,
    },


    "depInfo": {
      "flex": 1,
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 18,
      'paddingVertical' : Platform.OS === 'ios' ? 5 : 0 ,
      "fontWeight": '700',
      "color": "#383838",
      'textAlign': 'center',
      'borderBottomWidth': 2,
      'borderBottomColor': '#888',

    },
    "depManagerInfo": {
      "flex": 1,
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 18,
      'paddingVertical' : Platform.OS === 'ios' ? 5 : 0 ,
      "fontWeight": '700',
      "color": "#383838",
      'textAlign': 'center',
      'marginLeft': 25
     
    },
    "depAmountInfo": {
      "flex": 1,
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 18,
      'paddingVertical' : Platform.OS === 'ios' ? 5 : 0 ,
      "fontWeight": '700',
      "color": "#383838",
      'textAlign': 'right',
      'marginRight' :10,
     
    },

    'btnWrap': {
      'width': '100%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': '10%',
      'marginBottom': '10%',
    },

    'regBtn': {
      'backgroundColor': '#f15a24',
      'borderRadius': 10,
    },
    'regBtnText': {
      'color': 'white',
      'fontSize': 24,
      'fontWeight': Platform.OS === 'ios' ? '700' : 'bold',
      'fontFamily': "Apple SD Gothic Neo",
      'textAlign': 'center',
      'lineHeight': 50,
    },

  });
}