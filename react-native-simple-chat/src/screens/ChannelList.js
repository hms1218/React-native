import styled, {ThemeContext} from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";
import moment from "moment";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
`

//각 아이템(채널)을 감싸는 터치 가능한 영역
const ItemContainer = styled.Pressable`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.listBorder};
    padding: 15px 20px;
`

//텍스트를 감싸는 영역(제목+설명)
const ItemTextContainer = styled.View`
    flex: 1;
    flex-direction: column;
`

//제목 스타일
const ItemTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
`

//설명 스타일
const ItemDescription = styled.Text`
    font-size: 16px;
    margin-top: 5px;
    color: ${({theme}) => theme.listDescription};
`

//생성 시간 스타일
const ItemTime = styled.Text`
    font-size: 12px;
    color: ${({theme}) => theme.listTime};
`

//더미 데이터(100개의 채널)
const channels = [];
for(let idx = 0; idx < 100; idx++){
    channels.push({
        id: idx,
        title: `title ${idx}`,
        description: `description ${idx}`,
        createAt: idx,
    });
}

//개별 채널 아이템을 렌더링 하는 컴포넌트
const Item = React.memo(({item : {id, title, description, createAt}, onPress}) => {
    const theme = useContext(ThemeContext);
    console.log(`Item : ${id}`);

    const getDateOrTime = ts => {
        //startOf(unit) : 현재 moment객체를 지정한 단위의 시작 지점으로 변경한다.
        //해당 날짜의 00:00:00초로 설정
        const now = moment().startOf('day');
        //전달된 ts날짜의 자정을 기준
        const target = moment(ts).startOf('day');
        //diff : 날짜 차이를 계산
        //같은날이면 : 0
        //ts가 어제면 : 1
        //ts가 이틀전이면 : 2
        
        return moment(ts).format(now.diff(target, 'days') > 0 ? 'MM/DD' : 'HH:mm')
    }

    return(
        <ItemContainer onPress={() => onPress({id, title})}> {/* 요소를 가로로 배치 */}
            <ItemTextContainer> 
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemTextContainer>
            <ItemTime>{getDateOrTime(createAt)}</ItemTime>
            <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={theme.listIcon}
            />
        </ItemContainer>
    )
})

const ChannelList = ({navigation}) => {

    //fireStore에서 받아온 내용을 저장하기 위한 state
    const [channels, setChannels] = useState([]);

    //채널목록화면이 렌더링됐을 때 콜백함수를 실행하겠다.
    useEffect(() => {
        //1. fireStore의 'channels' 컬렉션에 대한 쿼리 생성
        //생성일을 내림차순으로 정렬해서 데이터를 가져오겠다.
        const collectionQuery = query(
            collection(db, 'channels'), orderBy('createAt','desc')
        );

        //2. onSnapshot : 실시간 리스너 등록
        //수신 대기상태로 있다가 데이터베이스에 문서가 추가되거나 수정될 때마다 지정된 함수가 호출된다.
        // - collectionQuery의 결과에 변경이 생길때마다 snapshot 콜백함수가 실행된다.
        const unsubscribe = onSnapshot(collectionQuery, snapshot => {
            const list = [];

            //쿼리결과로 돌아온 문서들을 순회
            snapshot.forEach(doc => {
                //문서의 실제 데이터(객체)를 추출
                list.push(doc.data());
            })

            console.log(list);

            //우리가 만든 state에 저장
            setChannels(list);
        })
        //useEffect의 클린업 함수
        //컴포넌트가 언마운트 되었거나, 리렌더링으로 이 이펙트가 재실행될 때 기존의 구독을 해제한다.
        //수신 대기상태를 해제하지 않으면 다시 채널 목록화면이 마운트 될 때,
        //수신 대기 이벤트가 추가되면서 데이터를 중복으로 받아오는 문제가 발생할 수 있다.
        return () => unsubscribe();
    },[])

    const _handleItemPress = (params) => {
        navigation.navigate('Channel', params);
    }

    return(
        <Container>
            <FlatList
                keyExtractor={item => item['id']} //고유한 키를 id로 지정
                data={channels} //데이터 리스트
                renderItem={({item}) => (
                    <Item item={item} onPress={_handleItemPress} /> //배열에 들어있는 각 아이템을 렌더링
                )}
                windowSize={3}
            />
        </Container>
    )
}

export default ChannelList;