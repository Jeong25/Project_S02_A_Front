import React, { Component, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Dimensions } from 'react-native';
// import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EventList = (props) => {
    return (
        <View class="v102_49">
            <View class="v101_441">
                <View class="v101_442"></View>
                <View class="v101_443"></View>
                <View class="v101_444"></View>
                <View class="v101_446"></View>
                <View class="v101_448"></View><Text class="v101_449">행사검색</Text><Text class="v101_450">Qr Code를 생성할 행사를
                    선택해주세요</Text><Text class="v101_451">행사 찾기</Text>
                <View class="v101_453"></View>
            </View>
            <View class="v101_455">
                <View class="v101_481">
                    <View class="v101_482">
                        <View class="v101_483"></View>
                    </View><Text class="v101_484">A 세미나</Text><Text class="v101_485">운영자 A</Text><Text class="v101_486">/
                        행사일정 : 22.01.01 ~ 22.02.01</Text>
                    <View class="v101_487">
                        <View class="v101_488"><ReactImage src="./images/v101_446.png" /></View>
                    </View>
                </View>
                <View class="v103_2">
                    <View class="v103_3">
                        <View class="v103_4"></View>
                    </View><Text class="v103_5">B 세미나</Text><Text class="v103_6">운영자 B</Text><Text class="v103_7">/ 행사일정
                        : 22.01.01 ~ 22.02.01</Text>
                    <View class="v103_8">
                        <View class="v103_9"><ReactImage src="./images/v101_446.png" /></View>
                    </View>
                </View>
                <View class="v103_10">
                    <View class="v103_11">
                        <View class="v103_12"></View>
                    </View><Text class="v103_13">C 세미나</Text><Text class="v103_14">운영자 C</Text><Text class="v103_15">/
                        행사일정 : 22.01.01 ~ 22.02.01</Text>
                    <View class="v103_16">
                        <View class="v103_17"><ReactImage src="./images/v101_446.png" /></View>
                    </View>
                </View>
                <View class="v103_18">
                    <View class="v103_19">
                        <View class="v103_20"></View>
                    </View><Text class="v103_21">D 세미나</Text><Text class="v103_22">운영자 D</Text><Text class="v103_23">/
                        행사일정 : 22.01.01 ~ 22.02.01</Text>
                    <View class="v103_24">
                        <View class="v103_25"><ReactImage src="./images/v101_446.png" /></View>
                    </View>
                </View>
                <View class="v103_26">
                    <View class="v103_27">
                        <View class="v103_28"></View>
                    </View><Text class="v103_29">E 세미나</Text><Text class="v103_30">운영자 E</Text><Text class="v103_31">/
                        행사일정 : 22.01.01 ~ 22.02.01</Text>
                    <View class="v103_32">
                        <View class="v103_33"><ReactImage src="./images/v101_446.png" /></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default EventList
