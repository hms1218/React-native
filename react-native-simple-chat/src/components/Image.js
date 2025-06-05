import styled from "styled-components";
import {MaterialIcons} from '@expo/vector-icons'
import Button from "./Button";
import { Platform, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { useEffect } from "react";

const Container = styled.View`
    align-self: center;
    margin-bottom: 20px;
`

const ButtonContainer = styled.Pressable`
    background-color: ${({theme}) => theme.imageButtonBackground};
    position: absolute; 
    bottom: 0;
    right: 0;
    width: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`
// position: absolute
// 부모 요소를 기준으로 절대 위치에 배치한다.
// static : 문서의 흐름에 따라 배치된다.
// relative : 자기 자신의 원래 위치를 기준으로 문서 흐름이 유지
// fixed : 브라우저를 기준으로 위치를 고정
// sticky static : fixed처럼 동작하는 하이브리드, 설정한 위치에 도달하면 고정된다.

// position이 결정이 되면 top,right,bottom,left 같은 위치 관련 속성을 결정해야한다.

const ButtonIcon = styled(MaterialIcons).attrs({
    name: 'photo-camera',
    size: 22,
})`
    color: ${({theme}) => theme.imageButtonIcon}
`

const StyledImage = styled.Image.attrs(({imageStyle}) => ({
    style: imageStyle,
}))`
    background-color: ${({theme}) => theme.imageBackground};
    width: 100px;
    height: 100px;
    border-radius: ${({rounded}) => (rounded ? 50 : 0)}px;
`

//버튼 컴포넌트를 정의
const PhotoButton = ({onPress}) => {
    return(
        <ButtonContainer onPress={onPress}>
            {/* 버튼 안에 아이콘을 삽입 */}
            <ButtonIcon />
        </ButtonContainer>
    )
}

//권한을 요청하는 함수
const requestPermission = async () => {
            try {
                //플랫폼이 ios일 때만 권한 요청(Android는 별도의 권한 요청이 필요 없을 수 있다.)
                if(Platform.OS === 'ios'){
                    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    if(status !== 'granted'){
                        alert('Photo Permission', 'Please turn on the camera role permissions')
                    }
                }
            } catch (error) {
                alert('Photo Permission Error', error.message);
            }
        }

const Image = ({url, imageStyle,rounded, showButton=false, onChangeImage}) => {

    useEffect(() => {
        requestPermission(); //컴포넌트 마운트시 권한을 요청
    },[])

    //사용자가 "이미지 선택" 버튼을 눌렀을 때 호출되는 함수
    const _handleEditButton = async () => {
        try {
            //이미지 라이브러리(갤러리)에서 이미지를 선택할 수 있는 인터페이스를 띄운다.
            const result = await ImagePicker.launchImageLibraryAsync({
                // 이미지 타입만 선택할 수 있도록 설정 (비디오 등은 선택 불가)
                mediaTypes: ['images'],
                // 선택 후 사용자가 이미지를 편집할 수 있도록 허용 (크롭 등)
                allowsEditing: true,
                // 편집 시 고정될 비율 (여기서는 정사각형: 1:1)
                aspect: [1, 1],
                // 이미지의 품질 설정 (1은 최고 품질)
                quality: 1,
            })

            // 사용자가 이미지 선택을 취소하지 않았다면(result.canceled가 false라면)
            if (!result.canceled) {
                // 선택된 이미지 정보가 담긴 배열의 첫 번째 항목에서 URI를 추출합니다.
                const imageUri = result.assets[0].uri;
                // 추출한 이미지 URI를 부모 컴포넌트에 전달하여 이미지 변경을 알립니다.
                onChangeImage(imageUri);
            }
        } catch (error) {
            // 이미지 선택 또는 처리 중 에러 발생 시, 에러 메시지를 포함한 경고창 출력
            Alert.alert('Photo Error', e.message);
        }
        
    }

    return(
        <Container>
            <StyledImage 
                source={{uri: url}} 
                style={imageStyle}
                rounded={rounded}
            />
            {/* showButton이 true면 버튼을 렌더링 */}
            {showButton && <PhotoButton onPress={_handleEditButton}/>}
        </Container>
    )
}

export default Image;

// requestMediaLibraryPermissionsAsync()   
// {    
//    status: ‘granted’  → 권한허용(’granted’) 또는 거부(’denied’)
//    granted : true → Boolean값, 권한이 허용되었는지 여부
//    canAskAgain : true → 사용자가 다시 권한을 요청 받을 수 있는지 여부
//    expires : never → 권한 만료시간(’never’, 또는 타임스탬프)   
// }

// launchImageLibraryAsync(options)
// - 인자로 전달할 수 있는 option
//   - mediaTypes : 선택 가능한 파일 타입 [images,videos,all]
//   - allowEditing : 이미지 선택 후 편집화면을 띄울지 boolean
//   - aspect : 편집시 고정 비율 [1,1]
//   - quality : 저장될 이미지/비디오의 품질, 1은 최고화질
// - 반환값   
//   {    
//     canceled : boolean,
//     assets : [        
//          {       
//              uri : string,        
//              width : number,       
//              height : number,      
//              fileSize : number,      
//              type : string,       
//              fileName : string,
//              duration ?: number, //비디오 선택시       
//          }      
//       ]
//    }