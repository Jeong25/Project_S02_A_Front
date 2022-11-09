import { StyleSheet } from 'react-native';


export const styleSheet = (windowHeight, windowWidth) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({
        "wrap": {
            "width": '100%',
            "height": '100%',
            'backgroundColor': 'white',
            'display' : 'flex',
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
          'contentsWrap': {
            'width': '90%',
            "marginLeft": 'auto',
            "marginRight": 'auto',
            'marginTop' : '10%',
          },
          'inputWrap' : {
            'marginBottom' : '5%',
          },
      
          "label": {
            "fontFamily": "Apple SD Gothic Neo",
            "color": "#f15a24",
            "fontWeight": '700',
            "fontSize": 14,
            'marginBottom': 5,
          },
      
          "input": {
            "width": "100%",
            'height' : 40,
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 18,
            "fontWeight": '700',
            "color": "#383838",
            'textAlign' : 'center',
            'borderBottomWidth' : 2,
            'borderBottomColor' :'#888'
          },
      
          'btnWrap':{
            'width' : '90%',
            'marginLeft' : 'auto',
            'marginRight' : 'auto',
            'marginTop' :30,
          },
          
          'searchBtn' : { 
            'backgroundColor' : '#f15a24',
            'borderRadius' : 10,
      
          },
          'searchBtnText' : { 
            'color' : 'white',
            'fontSize' : 24,
            'fontWeight': Platform.OS === 'ios' ? '700' : 'bold' ,
            'fontFamily': "Apple SD Gothic Neo",
            'textAlign' : 'center',
            'lineHeight': 50,
          },
          
      
        
    });
}