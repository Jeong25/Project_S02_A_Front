import { Dimensions, StyleSheet } from 'react-native';

export const QrModalStyleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "wrap": {
      "width": '90%',
      'height' : 80,
      'marginLeft' : 'auto',
      'marginRight' : 'auto',
      'marginBottom' : 500,
      'backgroundColor' :'white',
      "zIndex": 9,
      'elevation' : 9,
      'shadowColor' : '#333',
      'shadowOpacity' :0.7,
      'shadowOffset' : {
        height: -1,
        width : 0
      },
      'borderRadius' : 10,

    },


    'textWrap' : {
     
      
    },

 
    'closeBtn':{
    

    },

    'closeText': {
      'color' : '#f15a24',
      'textAlign':'right', 
      
    },
  })
}
