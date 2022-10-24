import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "wrap": {
      'position': 'relative',
      "width": '100%',
      "height": '100%',
      'backgroundColor': 'white',
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
    "won": {
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      "fontSize": 18,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "700",
      "color": "#1d1d1d",
    },

    "contentsWrap": {
      "width": "100%",
      'marginTop' : 10,
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
      'marginBottom': '5%',
    },
    
    "label": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,
    },
    
  
    "searchBtn": {
      "width": 30,
      "height": 30,
      "marginTop": -5,
      "position": "absolute",
      "right": 0,
      "bottom": 5,
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
      "fontSize": 18,
      "fontWeight": '700',
      "color": "#383838",
      "paddingTop": 0,
      "paddingBottom": 5,
      'textAlign' : 'center'
    },
    "fileInput": {
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
      'paddingRight' : 30,
      'textAlign' : 'center'
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
      "paddingBottom": 5,
      'paddingRight' : 25,
      'textAlign' : 'right'
    },


    "addBtn": {
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      "width": 30,
      "height": 30,
      "backgroundColor": "#f15a24",
      "borderRadius": 50,
      'zIndex': 1,
      'display':'flex',
      'alignItems' :'center',
      'paddingVertical' :5
    },


    "addIcon": {
      "width": 20,
      "height": 20,
      'marginLeft': 'auto',
      'marginRight': 'auto',
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
   
    "btnWrap": {
      "width": "100%",
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 40,
      "flexDirection": "row",
      "justifyContent": "center",
      "alignItems": "center",
    },
 
  
    "requestBtn": {
      "width": 140,
      "backgroundColor": "#F15A24",
      "borderRadius": 50,
    },
    "buttonText": {
    
      "textAlign": "center",
      "color": "white",
      "fontSize": 21,
      "fontWeight": "500",
      "lineHeight": 50,
      "fontFamily": "Apple SD Gothic Neo"
    },

  })
}