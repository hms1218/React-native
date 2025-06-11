import styled, { ThemeContext } from "styled-components";
import { Text, FlatList, Alert } from "react-native";
import { useState, useEffect, useLayoutEffect, useContext } from "react";
import { createMessage, db } from "../utils/firebase";
import {
    collection,
    onSnapshot,
    query,
    doc,
    orderBy,
} from 'firebase/firestore'
import { Input } from "../components";
import { GiftedChat, Send } from "react-native-gifted-chat";
import {MaterialIcons} from '@expo/vector-icons'
import { getCurrentUser } from "../utils/firebase";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background}
`

// SendButton 컴포넌트 : 메시지 전송 버튼 커스텀 컴포넌트
const SendButton = props => {
    const theme = useContext(ThemeContext);

    return(
        <Send
            {...props}
            disabled={!props.text}
            containerStyle={{
                width: 44,
                height: 44,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 4,
            }}
        >
            <MaterialIcons
                name="send"
                size={24}
                color={
                    props.text ? theme.sendButtonActive : theme.sendButtonInactive
                }
            />
        </Send>
    )
}

//넘겨받은 채널의 id와 제목을 화면에 출력해주세요.
const Channel = ({navigation,route}) => {
    const {params} = route;
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");

    const theme = useContext(ThemeContext);
    const {uid, name, photoUrl} = getCurrentUser();

    const _handleMessageSend = async (messageList) => {
        //GiftedChat에서 전달받은 메시지 배열의 첫 번째 메시지를 추출
        const newMessage = messageList[0];
        console.log('newMessage : ',newMessage);
        console.log('messages : ',messages)
        try {
            await createMessage({channelId: params.id, text: newMessage})
        } catch (error) {
            Alert.alert('Send Message Error',error.message);
        }
    }

    useEffect(() => {
        //params.id가 없으면 아래 코드를 실행 방지
        if(!params.id) return;
        //'channels'컬렉션에서 문서 ID를 통해 데이터를 참조
        const docRef = doc(db, 'channels', params.id);
        const collectionQuery = query(
            collection(db, `${docRef.path}/messages`),
            orderBy('createAt','desc')
        );

        const unsubscribe = onSnapshot(collectionQuery, snapshot => {
            const list = snapshot.docs.map(
                doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            // [];
            // snapshot.forEach(doc => {
            //     list.push(doc.data());
            // });
            setMessages(list);
        })
        return () => unsubscribe();
    },[params.id]) //params.id가 변경될 때마다 실행

    useLayoutEffect(() => {
        navigation.setOptions({headerTitle: params.title || 'Channel'})
    },[params.title])

    return(
        <Container>
            {/* <FlatList
                keyExtractor={item => item['id']}
                data={messages}
                renderItem={({item}) => (
                    <Text style={{fontSize: 24}}>{item.text}</Text>
                )}
            />
            <Input
                value={text}
                onChangeText={text => setText(text)}
                onSubmitEditing={() => createMessage({
                    channelId: params.id,
                    text,
                }, setText(''))}
            /> */}
            <GiftedChat
                listViewProps={{ //리스트 뷰의 스타일을 테마의 background색상으로 지정한다.
                    style: {background: theme.background}
                }}
                placeholder="Enter a message..." //입력창에 표시할 플레이스홀더
                // messages={messages.text} //채팅 메시지 배열 전달
                user={{_id: uid, name, avatar: photoUrl}}
                onSend={_handleMessageSend} //메시지 전송 시 호출되는 함수 지정
                alwaysShowSend={true} //항상 전송버튼 표시
                textInputProps={{
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    textContentType: 'none',
                    underlineColorandroid: 'transparent',
                }}
                multiline={false}
                renderUsernameOnMessage={true} //메시지에 사용자 이름 표시
                scrollToBottom={true} //새 메시지 추가시 스크롤 아래로 이동
                renderSend={props => <SendButton {...props} />} //커스텀 전송 버튼 렌더링
            />
        </Container>
    )
}

export default Channel;