import React from "react";
import { Text, View, BackHandler,SafeAreaView, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { useState, useEffect,Fragment } from "react";
import { styleSheet } from './styleSheet';
import { useIsFocused } from '@react-navigation/native';



const UserData = (props) => {
  

    return (
        <Fragment >

            <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
                <View style={styles.wrap}>
                    <View style={styles.topMenu}>

                        <View style={styles.backBtn}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <ReactImage source={require('../assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.topTitle}>회원정보</Text>

                    </View>

                    <View style={styles.contentsWrap}>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>단체명</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>부서명</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>성명</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>핸드폰 번호</Text>
                            <TextInput style={styles.input} />
                        </View>

                        <View style={styles.btnWrap}>
                            <TouchableOpacity style={styles.saveBtn}>
                                <Text style={styles.saveBtnText}>저장</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.delAccountBtn}>
                                <Text style={styles.delBtnText}>회원탈퇴</Text>
                            </TouchableOpacity>

                        </View>


                    </View>



                </View>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
        </Fragment >

    );

}

export default UserData;