import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({

        "wrap": {
            'width': '100%',
            'height': '100%',
            'backgroundColor': 'white',
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
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },
        'titleWrap': {
            'marginTop': '5%',

        },
        'subTitleWrap': {
            'flexDirection': "row",
            'alignItems': 'center',
        },
        'icon': {
            "width": 25,
            "height": 25,
            'marginRight': 5
        },
        'welcome': {
            'color': '#888',
            'fontSize': 18,
            'fontWeight': '700',

        },
        'mainTitle': {
            'color': '#333',
            'fontSize': 24,
            'fontWeight': 'bold',
            'marginTop': 15,

        },
        'form': {
            'width': '100%',
            "marginLeft": 'auto',
            "marginRight": 'auto',
            'marginTop': '8%',
        },
        'layer':{
            'width' : '100%',
            'flexDirection' :'row',
            'alignItems' : 'center',
            'justifyContent' : 'space-between',
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

        "userInfo": {
            "width": "100%",
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 18,
            "fontWeight": '700',
            "color": "#383838",
            'textAlign': 'center',
            'borderBottomWidth': 2,
            'borderBottomColor': '#888',
        },

        'btnWrap': {
            'width': '90%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': '10%',
            'marginBottom': '10%',
        },

        'signInBtn': {
            'backgroundColor': '#f15a24',
            'borderRadius': 10,
        },
        'signInBtnText': {
            'color': 'white',
            'fontSize': 24,
            'fontWeight': Platform.OS === 'ios' ? 700 : 'bold',
            'fontFamily': "Apple SD Gothic Neo",
            'textAlign': 'center',
            'lineHeight': 50,
        },


    })
}